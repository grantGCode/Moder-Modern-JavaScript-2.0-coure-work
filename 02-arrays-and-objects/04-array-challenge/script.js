/* Challenge 1 */

    let arr = [1, 2, 3, 4, 5];

        arr.unshift(0)
        arr.push(6);
        arr.reverse();


    console.log(arr);

/* Challenge 2 */

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [5, 6, 7, 8, 9, 10];

const newArray = arr1.concat(arr2.slice(1));

console.log(newArray);