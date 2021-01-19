const request = require('postman-request')
const api_key = process.env.api_key
const url = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query=37.8267,-122.4233&units=f'

request(url, {json: true}, (error, response) => {
    const degrees = response.body.current.temperature
    const feels_like = response.body.current.feelslike
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + degrees + " out. It feels like " + feels_like + " degrees out.")
})