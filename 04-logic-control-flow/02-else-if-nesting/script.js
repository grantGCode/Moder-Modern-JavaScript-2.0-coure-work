const d = new  Date(6, 22, 2023, 18, 0, 0);
const hour = d.getHours();



if (hour < 12) {
    console.log('Good Morning');
}else if (hour < 18) {
    console.log('Good Afternon');
} else {
    console.log('Good Night');
}



//Example of Nested if statments in a if statment
if (hour < 12) {
    console.log('Good Morning');
    if (hour === 6) {
        console.log('Wake Up!');
    }
}else if (hour < 18) {
    console.log('Good Afternon');
} else {
    console.log('Good Night');
    if (hour >= 20) {
        console.log('zzzzzzzz');
    }
}

/* You can nest as manny if statments you want */

// Examples of if statments with multipule conditions

if (hour >= 7 && hour < 15) {
    console.log('It is work time')
}


if (hour === 6 || hour === 20) {
    console.log ('Brush your teeth!');
}