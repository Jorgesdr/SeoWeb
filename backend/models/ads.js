import 'dotenv/config'

const CUSTOMER_ID = process.env.CUSTOMER_ID

export class AdsModel {
  static getsKeyPlanner = async ({ query }) => {
    try {
      const customer = client.Customer({
        customer_id: CUSTOMER_ID
      })
      const results = await customer.query(querys)
      return results
    } catch (err) {
      console.error(err)
      return 'Error obteniendo datos de Google Ads'
    }
  }
}
