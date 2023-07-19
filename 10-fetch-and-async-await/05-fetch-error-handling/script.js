fetch ('http://httpstat.us/200')
.then((response) => {
    return response;
})
.then(() => {
    console.log('success');
});


//catch runs on network error
fetch ('http://httpstat.us/404')
.then((response) => {
    return response;
})
.then(() => {
    console.log('success'); // the server is supposto return a 404 but this line will still run
})
.catch((error) => {
    console.log(error);
});

//checking for network errors

    fetch ('http://httpstat.us/404')
    .then((response) => {
        if(!responce.ok) {
            throw new Error('Request Failed'); 
        }
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    }); 

    //testing for specific code
    fetch ('http://httpstat.us/404')
    .then((response) => {
        if(responce.status === 404) {
            throw new Error('Request Failed');// if Status is 404 
        } else if (response.status === 500) {
            throw new Error('Server Error'); // if Status === 500
        } else if (response.status !== 200) {
            throw new Error('Request Failed'); // if Status is anything other than status of 200
        }
        return response;
    })
    .then(() => {
        console.log('success'); 
    })
    .catch((error) => {
        console.log(error);
    }); 