const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=4006d490863659c579ac16beabb8be36&query=${latitude},${longitude}&units=f`

    request({url, json: true}, (error , {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location. Please try another search', undefined)
        } else (
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out but it feels like ${body.current.feelslike} degrees out and the humidity is ${body.current.humidity}%`)
        )
    })
}

module.exports = forecast