const promise = new Promise((resolve, reject) => {
   // Do async task
    setTimeout(() => {
        console.log('Async task comolete')
        resolve();
    }, 1000);
});

// handles the prommis
promise.then(() => {
    console.log('Promise consumed..');
});

//Promise 2

    new Promise((resolve, reject) => {
    
        setTimeout(() => {
            let error = false;
            // the error and if stament set up a condition if the promise has an error ocour
            if(!error){
            resolve({name: 'John', Age: 30});
            }else{
                reject('Error: Something went wrong')
            }
        }, 1000);
    }).then((user) => {console.log(user)})// will return user
        .catch((error) => console.log(error))// .catch will catch the error and run this condition if one ocours
        .finally(() => console.log('The promise has been resolved or rejected'))// finally will run if the promise is resolved or if there is an error


console.log('Hello from global scope');// this will return first because promies are non-blocking
