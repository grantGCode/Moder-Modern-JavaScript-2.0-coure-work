const getUsers = async () => {
  try {
    // const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const responce = await fetch('https://httpstart.us/500');

    if (!responce.ok) {
        throw new Error('Request Failed');
    }

    const data = await responce.text();

    console.log(data);
} catch (error) {
    console.log(error);
    }
};

getUsers();

// Checking for errors with out a try catch and outside the funtion on lines 22 - 35. Useing a .catch when calling the function
const getPosts = async () => {
    
      // const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      const responce = await fetch('https://httpstart.us/500');
  
      if (!responce.ok) {
          throw new Error('Request Failed');
      }
  
      const data = await responce.text();
  
      console.log(data);
  };

  getPosts().catch((error) => console.log(error));// instead of putinng a try catch you can check when calling the function with a .catch