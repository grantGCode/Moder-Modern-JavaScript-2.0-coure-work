function creatPost(title, body) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json',
            token: 'abc123'
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data)); 
}

creatPost({title: 'My Posts', body: 'This is my post'});