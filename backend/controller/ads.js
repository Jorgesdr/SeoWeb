export class AdsController {
  constructor (AdsModel) {
    this.AdsModel = AdsModel
  }

  getsKeyPlanner = async (req, res) => {
    const { query } = req.body
    // const {query}=req.query
    try {
      const data = await this.AdsModel.getKeywords({ query })
      res.json(data)
    } catch (err) {
      console.error(err)
      res.status(500).send('Error obteniendo datos de Google Ads')
    }
  }
}
