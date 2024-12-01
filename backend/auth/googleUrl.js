export function googleUrl () {
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
