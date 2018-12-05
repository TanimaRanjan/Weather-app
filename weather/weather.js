var request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/1732f5b553cd2b33aba75b3d173e8570/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
      if(!error && response.statusCode === 200) {
        //console.log(body.currently.temperature);
        callback(undefined, {
            temperature: body.currently.temperature,
            summary: body.currently.summary,
            apparentTemperature: body.currently.apparentTemperature,
            windSpeed: body.currently.windSpeed
        });
      } else if(response.statusCode === 400) {
        callback('Unable to fetch weather');
      }
    });
};

module.exports.getWeather = getWeather;
