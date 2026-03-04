// Using For Each Array 

let newArray = [1,2,3,4,5];

let nextArray = newArray.forEach((value) => { return value * 2})

console.log(nextArray); // Not returning new Array

newArray.forEach((value) => { console.log(value * 2)}) // Only changes Occur 


// Using Map Method in Array 

// let array = [1,2,3,4,5];

// let result = array.map(function(value) {

//     return value * 2
// })

// console.log(result); // Returning New Array
// console.log(array);
