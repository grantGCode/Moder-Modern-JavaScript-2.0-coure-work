// Step 1
const Library = [
   {
        title: 'Book 1',
        author: 'author 1',
        Status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Book 2',
        author: 'author 2',
        Status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Book 3',
        author: 'author 3',
        Status: {
            own: true,
            reading: false,
            read: false,
        },
    },
]


// Step 2
Library[0].Status.read = true;
Library[1].Status.read = true;
Library[2].Status.read = true;

console.log(Library[0], Library[1], Library[2]);


//Step 3
const {title: firstBook } = Library[0];

console.log(firstBook);

//Step 4
const createJSONStr = JSON.stringify(Library);

console.log(createJSONStr);
