import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// import analyticsRoutes from './routes/analytics.js'
// import searchConsoleRoutes from './routes/search.js'
// import adsRoutes from './routes/ads.js'
import { createAuthRouter } from './routes/auth.js'
import { AuthModel } from './models/auth.js'
dotenv.config()

const app = express()
/*
{
  origin: (origin, callback) => {
    const whitelist = ['http://localhost:3000,http://localhost:5173']
    if (whitelist.includes(origin)) {
      callback(null, true)
    }
    if (!origin) {
      callback(null, true)
    }
    return callback(new Error('Not allowed by CORS'))
  }
}
*/
app.use(cors())

app.disable('x-powered-by')
app.use(express.json())

// Rutas
// app.use('/analytics', analyticsRoutes)
// app.use('/searchConsole', searchConsoleRoutes)
app.use('/auth ', createAuthRouter({ AuthModel }))
// app.use('/ads', adsRoutes)

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`)
})
