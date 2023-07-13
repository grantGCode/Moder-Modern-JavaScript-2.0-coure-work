function toggle(e) {
  console.log('callback ran');
  e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click', toggle);


// Bellow will mimic fetching posts from a server or an http request

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];



function createPost(post, cb) {
  setTimeout(() => {
    post.push(post);
    cb();
  }, 2000); // cb = call back (also know as call back function) 
}

function getPosts() {
  setTimeout(() => {
    postMessage.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div); 
    });
  }, 1000);  
}


createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

