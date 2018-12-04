const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
      a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
      }
    })
    .help()
    .alias('help', 'h')
    .argv;

        var addressCd = encodeURIComponent(argv.address);
        var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressCd}`;
        console.log('testing');
        axios.get(geocodeUrl).then((response) => {
          if(response.data.status === 'ZERO_RESULTS') {
              throw new Error('Unable to find the address');
          }
          console.log(response.data.results[0].formatted_address);
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var weatherUrl = `https://api.darksky.net/forecast/1732f5b553cd2b33aba75b3d173e8570/${lat},${lng}`;

            return axios.get(weatherUrl);

        }).then((response) => {
          var temperature= response.data.currently.temperature;
          var summary=  response.data.currently.summary;
          var apparentTemperature= response.data.currently.apparentTemperature;
          var windSpeed=  response.data.currently.windSpeed;
          console.log(`It ${summary} with temp ${temperature}. It feels like ${apparentTemperature}. Wind speed is ${windSpeed}`);
        }).catch((e) => {
          if(e.code === 'ECONNREFUSED') {
              console.log('Unable to connect to API server');
          } else {
            console.log(e.message);
          }
        }) ;
