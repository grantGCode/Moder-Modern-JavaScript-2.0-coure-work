const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // change this to true and none of the .thens will run on lines 14 - 24 only the .catch will run and the . then under line 25 after the catch

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name;// Pulls the Name fron the object on line 8
  })
  .then((name) => {
    console.log(name);// param on line 18 & 19 will pull the name from line 16
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => { 
  console.log(error);
  return 123;
})
.then((x) => console.log('This will run no matter what', x));// this will run if retun or error ocours
