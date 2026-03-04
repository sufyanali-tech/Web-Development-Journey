let arr = [1,2,3,4,5,6,7];

let newArray = [...arr];  // Spread operator to copy the other array

newArray.pop();

console.log(newArray);
console.log(arr)   