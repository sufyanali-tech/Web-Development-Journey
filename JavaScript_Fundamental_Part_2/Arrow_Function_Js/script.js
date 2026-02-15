// Arrow Function is simplest way of function expression

// Function Expression 

const result = function(firstNumber) {

    return firstNumber + 3;
}

const storeTheResult = result(10);

console.log(storeTheResult);

// Arrow Function 

// 1)
const result2 = firstNumber => firstNumber + 33; // Use only when the line of code shortest form

const addResult = result2(30);

console.log(addResult);

// 2)
const subtTwoNumber = (firstNumber, secoundNumber) => { // Use this type when two or more parameters in the Function

    return firstNumber - secoundNumber;
}

const storeTheValue = subtTwoNumber(40,20);

console.log(storeTheValue);
