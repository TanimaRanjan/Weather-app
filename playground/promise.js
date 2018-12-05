var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(typeof a === 'number' && typeof b === 'number') {
          resolve(a+b);
        } else {
           reject('You didnt pass a number');
        }
      }, 1500);
  });
};


// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey it worked!');
//     //reject('Unable to fulfill the promise');
//   }, 2500);
//
// });
//
// somePromise.then((message) => {
//   console.log('Success ', message);
// }, (errrorMessage) => {
//     console.log(errrorMessage);
// });

asyncAdd(4,5).then((result) => {
  console.log('Result: ', result);
  return asyncAdd(result, 'result');
}).then((result) => {
  console.log('Double of what you wanted ', result);
}).catch((errrorMessage) => {
  console.log(errrorMessage);
});
