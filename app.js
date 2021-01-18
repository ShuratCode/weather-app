const request = require('postman-request')
const api_key = process.env.api_key
const url = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query=37.8267,-122.4233'

request(url, {}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})