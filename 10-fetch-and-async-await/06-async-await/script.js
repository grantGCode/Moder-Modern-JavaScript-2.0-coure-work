const promise = new Promise((resolve, reject) => { 
setTimeout(() => { 
    resolve({name: 'John', age: 20 })
}, 1000);
});




async function getPromise() { // the async makes the function of getPromise asynchronous
    const responce = await promise;
    console.log(responce);
};


getPromise();


// The syntax similarities of async vs .then


// async

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}



// .then

// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
    
//     console.log(data);
// }

getUsers();


// async wih arrow function

const getPosts = async () => { // the async key word will go before the function () and the name of the function is a varible
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    console.log(data);
}
