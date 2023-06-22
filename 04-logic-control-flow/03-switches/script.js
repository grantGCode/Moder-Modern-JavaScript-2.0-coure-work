const d = new Date(2023, 6, 22, 8, 0, 0,);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('It is January');
        brake;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
        default:
            console.log('It is not Jan, Feb, or March');
}

//Example of Switch statment with ranges
switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    default: console.log('Good Night');
}
