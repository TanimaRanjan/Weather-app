var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Tanima'
  };

  setTimeout(() => {
      callback(user);
  }, 3000);

};

getUser(36, (userObject) => {
  console.log(userObject);
});
