import { google } from 'googleapis'
import jwt from 'jsonwebtoken'

export class AuthModel {
  static async getAuthUrl () {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth?'
    const options = {
      client_id: process.env.CLIENT_ID,
      redirect_uri: process.env.SERVER_ENDPOINT,
      scope: ['https://www.googleapis.com/auth/userinfo', 'https://www.googleapis.com/auth/userinfo.email'].join(' '),
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent'
    }
    const url = new URLSearchParams(options)
    return `${rootUrl}?${url.toString()}`
  }

  static async getToken ({ code }) {
    const url = process.env.TOKEN_URL
    const googles = google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.SERVER_ENDPOINT)

    const response = await fetch(`${url}${googles.tokens.access_token}`)
    const token = jwt.sign({ token: response.data }, process.env.JWT_SECRET, { expiresIn: '1h' })
    console.log(response.data)
    return { token }
  }

  static async getRefreshToken (refreshToken) {
    const response = await fetch(process.env.TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(`Error refreshing token: ${error.error_description}`)
    }

    return response.json() // Retorna un nuevo access_token
  }
}
