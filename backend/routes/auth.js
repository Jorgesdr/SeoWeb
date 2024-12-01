import { Router } from 'express'
import { AuthController } from '../controller/auth.js'

export const createAuthRouter = ({ authModel }) => {
  const authRouter = Router()
  const authController = new AuthController({ authModel })

  // authRouter.get('/login', authController.getsToken)
  authRouter.get('/login', (req, res) => {
    res.send('Hola')
  })

  // authRouter.get('/loginCallback', authController.loginCallback)

  return authRouter
}
