function getData(endpoint, cb) { // cb added later for call back function parm to soulution
const xhr = new XMLHttpRequest();

xhr.open('GET', endpoint);

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        cb(JSON.parse(this.responseText)); // changed console.log to cb
    } 
};

setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
};
/* This will return in no order */
// getData('./movies.json');
// getData('./actors.json');
// getData('./directors.json');


/*Solution to give a return order of the data use the 
function below and add a call back parm to line 1 */
getData('./movies.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
        console.log(data);
        getData('./actors.json', (data) => {
            console.log(data);
        });
    });
}); 