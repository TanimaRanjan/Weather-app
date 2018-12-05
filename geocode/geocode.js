const request = require('request');


var geocodeAddress = (address, callback) => {
        var addressCd = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressCd}`,
      json: true
    }, (error, response, body) => {
      if(error) {
      //  console.log('Unable to connect to Google Server');
        callback('Unable to connect to Google Server');
      } else if (body.status==='ZERO_RESULTS') {
        //console.log('Unable to find the address');
        callback('Unable to find the address');
      } else if (body.status === 'OK') {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });

      }
    });
};



 module.exports = {
   geocodeAddress
 };

//1732f5b553cd2b33aba75b3d173e8570
  //https://api.darksky.net/forecast/1732f5b553cd2b33aba75b3d173e8570/40.7247159,-73.9510677
//https://api.darksky.net/forecast/1732f5b553cd2b33aba75b3d173e8570/37.8267,-122.4233
