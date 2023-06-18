/* Converting Objects into JSON strings and converting JSON strings in to JS Objects */

const blogPost = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};


// Convert Objet to JSON string with stringify methould
const str = JSON.stringify(blogPost);

console.log('Console log str = ', str.id); // You can not acess key propertys of Objects in a JSON srting it will return undifined

//Conver JSON string in to a JS Object using parse mentould
const obj = JSON.parse(str);

console.log('Console log obj = ', obj);


const blogPosts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Twoi',
        body: 'This is the body',
    }
];

const str2 = JSON.stringify(blogPosts);


console.log(str2); // Will return a JSON String with an Array with 2 Objects in it.