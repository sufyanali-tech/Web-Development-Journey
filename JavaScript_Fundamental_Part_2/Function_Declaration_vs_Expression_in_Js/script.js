// Fucntion Declarction

// console.log(addNumbers(20,30)); Also we called them before function declaration
 
function addNumbers (firstNumber, secoundNumber) {

    return firstNumber + secoundNumber;
}

const result1 = addNumbers(20,40);

// Function Expression

// const result2 = storeAllResult(10,5); Can't call the function before declaring the function 

const storeAllResult = function (firstNumber, secoundNumber) {

    return firstNumber + secoundNumber;
}

const result2 = storeAllResult(10,5);

console.log(result1,result2);
