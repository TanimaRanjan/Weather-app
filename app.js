//const request = require('request');

const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
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

//console.log(argv.a);

geocode.geocodeAddress(argv.address, (errrorMessage, results) => {
    if(errrorMessage) {
      console.log(errrorMessage);
    } else {
      console.log(`Address: ${results.address}`);
      //console.log(results.latitude);
      //console.log(results.longitude);
      weather.getWeather(results.latitude, results.longitude, (errrorMessage, weatherResults) => {
          if(errrorMessage) {
            console.log(errrorMessage);
          } else {
            console.log(`Temperature: ${weatherResults.temperature}`);
            console.log(`Summary: ${weatherResults.summary}`);
            console.log(`Apparent Temperature: ${weatherResults.apparentTemperature}`);
            console.log(`Wind Speed: ${weatherResults.windSpeed}`);
          }
      });
    }
});
