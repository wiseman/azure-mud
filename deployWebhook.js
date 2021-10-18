const request = require('request')

console.log(`Calling clientDeployedWebhook: ${process.env.APP_NAME.split('')}`)

request.post({
  url: `https://${process.env.APP_NAME}.azurewebsites.net/api/clientDeployedWebhook`,
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ key: process.env.TOKEN })
})
