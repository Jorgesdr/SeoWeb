import { Router } from 'express'
import { AdsController } from '../controller/ads.js'

export const createRouterAds = ({ adsModel }) => {
  const routerAds = Router()
  const adsController = new AdsController({ adsModel })

  routerAds.get('/keywords', adsController.getKeywords)

  return routerAds
}
