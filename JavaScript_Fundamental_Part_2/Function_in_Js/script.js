
"use strict";

function print() {   

    console.log("Hi this is a Function called");
}
print(); // calling , invoking , running function


function addNumber(firstInt, secoundInt) { // Function Parameters

    console.log(`Numbers for Adding : ${firstInt} ${secoundInt}`);
    
    const storeNumber = firstInt + secoundInt;
    return storeNumber;
}

const functionReturnValue = addNumber(10,30);
console.log(functionReturnValue);