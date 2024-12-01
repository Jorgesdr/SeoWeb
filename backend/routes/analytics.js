import { Router } from 'express'

export const createRouterAnalytics = ({ analyticsModel }) => {
  const routerAnalytics = Router()

  routerAnalytics.get('/sessions', async (req, res) => {
    console.log('analytics')
  })

  return routerAnalytics
}
