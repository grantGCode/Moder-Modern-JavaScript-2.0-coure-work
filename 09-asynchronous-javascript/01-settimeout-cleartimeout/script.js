//setTimeout(function () {
    //console.log('Hello from callback');}, 0); 

    //console.log('Hello from global scope');// This link will run before Line 2 because Line 2 is put on the task Queue before it is run.
        
    //setTimeout(changeText, 2000);
    
    
    
    function changeText() {
        document.querySelector('h1').textContent = 'Hello from callback';
    }

    const timerId = setTimeout(changeText, 3000);

    document.querySelector('#cancle').addEventListener('click', () => {
        console.log(timerId);
        clearTimeout(timerId);
        console.log('Timer Cancelled');
    })