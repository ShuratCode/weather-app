const request = require('postman-request')
const { exit } = require('process')
const api_key = process.env.api_key
const weatherstackURL = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query=37.8267,-122.4233&units=f'

request(weatherstackURL, {json: true}, (error, response) => {
    const degrees = response.body.current.temperature
    const feels_like = response.body.current.feelslike
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + degrees + " out. It feels like " + feels_like + " degrees out.")
})

const access_token=process.env.access_key
const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=' + access_token + '&limit=1'
request(geocodingURL, {json:true}, (error, response) => {
    if (error)
    {
        console.log(error)
        exit(1)
    }
    const features = response.body.features
    if (features.length > 0)
    {
        const latitude = features[0].center[1]
        const longitude = features[0].center[0]
        console.log("The coordinates for your location are: " + latitude + ',' + longitude)
    }
})
