const { options } = require('postman-request')
const geocode = require('./utils/geocode')
const request = require('postman-request')

const access_token=process.env.access_key
const api_key = process.env.api_key
// const weatherstackURL = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query=37.8267,-122.4233&units=f'

// request(weatherstackURL, {json: true}, (error, response) => {
//     if (error)
//     {
//         console.log('Unable to connect to weather service')
//     }
//     else if (response.body.error)
//     {
//         console.log('Unable to find location')
//     }
//     else
//     {
//         const degrees = response.body.current.temperature
//         const feels_like = response.body.current.feelslike
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + degrees + " out. It feels like " + feels_like + " degrees out.")
//     }
// })


// request(geocodingURL, {json:true}, (error, response) => {
//     if (error)
//     {
//         console.log('Unable to connect to geo coding service')
//     }
//     else if (response && response.body.message)
//     {
//         console.log(response.body.message)
//     }
//     else
//     {
//         const features = response.body.features
//         if (features.length > 0)
//         {
//             const latitude = features[0].center[1]
//             const longitude = features[0].center[0]
//             console.log("The coordinates for your location are: " + latitude + ',' + longitude)
//         }
//     }
// })



geocode("Modi'in", (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})