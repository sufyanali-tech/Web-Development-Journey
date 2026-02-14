// if else is control structure of the program 

const age = 18;

if(age >= 18) {

    console.log(`Your have allowed to drive a car`);
}
else {

    console.log(`Your don't allowed to drive a car`);
}

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 

const marksWeight1 = 78;
const marksHeight1 = 1.69;

const marksBMI1 = marksWeight1/(marksHeight1 ** 2)

console.log("Marks BMI is : ", marksBMI1);

const johnWeight1 = 92;
const johnHeight1 = 1.95;

const johnBMI1 = johnWeight1/(johnHeight1** 2);

console.log("John BMI is : ", johnBMI1);

if(marksBMI1 > johnBMI1) {

    console.log(`Marks BMI is higher than John Marks BMI is ${marksBMI1}`);
}
else {

    console.log(`John BMI is higher than Marks BMI is ${johnBMI1}`);   
}