const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var addressCd = encodeURIComponent(address);
        request({
          url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressCd}`,
          json: true
        }, (error, response, body) => {
          if(error) {
            reject('Unable to get location');
          } else if( body.status === 'ZERO_RESULTS') {
            reject('Unable to find that address');
          } else {
            resolve({
              Address: body.results[0].formatted_address,
              Latitude: body.results[0].geometry.location.lat,
              Longitude: body.results[0].geometry.location.lng
            });
          }
        });
  });
};

module.exports.geocodeAddress = geocodeAddress;

geocodeAddress('11222').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errrorMessage) => {
  console.log(errrorMessage);
});
