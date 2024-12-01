export class AuthController {
  constructor (authModel) {
    this.authModel = authModel
  }

  getsAuthUrl = async (req, res) => {
    try {
      const url = await this.authModel.getAuthUrl()
      res.json({ url })
    } catch (err) {
      console.error(err)
      res.status(500).send('Error obteniendo url de autenticación')
    }
  }

  getsToken = async (req, res) => {
    const { code } = req.body
    console.log(code)
    try {
      const token = await this.authModel.getToken({ code })
      res.json(token)
    } catch (err) {
      console.error(err)
      res.status(500).send('Error obteniendo token de autenticación')
    }
  }

  getsRefreshToken = async (req, res) => {
    const { refreshToken } = req.body
    try {
      const token = await this.authModel.getRefreshToken({ refreshToken })
      res.json(token)
    } catch (err) {
      console.error(err)
      res.status(500).send('Error obteniendo token de autenticación')
    }
  }
}
