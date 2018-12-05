console.log('Starting App');

setTimeout(() =>  {
  console.log('Inside the callback');
}, 2000);

setTimeout(() =>  {
  console.log('Second setTimeout ');
}, 0);

setTimeout(() =>  {
  console.log('Fourth setTimeout ');
}, 1000);

setTimeout(() =>  {
  console.log('Third setTimeout ');
}, 500);


console.log('Finishing App');
