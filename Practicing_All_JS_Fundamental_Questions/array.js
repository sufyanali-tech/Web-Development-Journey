// // Using For Each Array 

// let newArray = [1,2,3,4,5];

// let nextArray = newArray.forEach((value) => { return value * 2})

// console.log(nextArray); // Not returning new Array

// newArray.forEach((value) => { console.log(value * 2)}) // Only changes Occur 


// Using Map Method in Array 

// let array = [1,2,3,4,5];

// let result = array.map(function(value) {

//     return value * 2
// })

// console.log(result); // Returning New Array
// console.log(array);


// Using Reduce Method in JavaScript

// let words = ["Hello", "World"];

// let sentence = words.reduce((acc, word) => acc + " " + word);

// console.log(sentence);
// console.log(words);



// let array = [1,2,3,4,5];

// let result = array.reduce((a,b) => { 

//     console.log(a,b);
//     return a + b;
// },0)

// console.log(result);    // if initiaze accumulator with zero then current will start from 2nd element

//  Filter method in js

let newArray = [1,2,3,4,5,6,7,8,9,10];

let afterCondition = newArray.filter((value) => {

    if(value > 5) {

        return true;
    }
})

console.log(newArray);
console.log(afterCondition)