require('dotenv').config()

module.exports = {
  server: {
    port: process.env.PORT || 1337
  },
  currency: {
    apiKey: process.env.CURRENCY_API_KEY
  }
}
