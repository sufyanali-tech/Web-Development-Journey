// // Question Number 1

// function counter() {

//     let count = 0;
//     let myName = "Sufyan"
//     return function increament() {

//         count++;
//         return {count,myName}
//     }
// }

// const myCounter = counter();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());


// Question 2 From Array

let arr = [1,2,3,4,5]

console.log(arr);

let pop = arr.pop()
console.log(arr);

let push = arr.push(7)
console.log(arr);

let shift = arr.shift();
console.log(arr);
let unshift = arr.unshift(1);
console.log(arr);

let splice = arr.splice(0,1);
console.log(arr);

console.log(arr);

let slice = arr.slice(0,1)

console.log(slice);

console.log(arr);

let array = [1,2,3,4,5];
console.log(array);

console.log(array.reverse());

let assendingOrder = array.sort(function(a,b) {

    return a - b;
})

console.log(assendingOrder);

console.log(array);

let dessendingOrder = array.sort(function(a,b) {

    return b - a;
})

console.log(dessendingOrder);

console.log(array);


