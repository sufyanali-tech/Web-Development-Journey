// Operator Precedence is all about which operator will execute first and telling their direction for example

// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter)

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:

// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// Data (1)

const marksWeight1 = 78;
const marksHeight1 = 1.69;

const marksBMI1 = marksWeight1/(marksHeight1 ** 2)

console.log("Marks BMI is : ", marksBMI1);

const johnWeight1 = 92;
const johnHeight1 = 1.95;

const johnBMI1 = johnWeight1/(johnHeight1** 2);

console.log("John BMI is : ", johnBMI1);

const markHigherBMI1 = marksBMI1 > johnBMI1;

console.log(markHigherBMI1);

// Data (2)

const marksWeight2 = 95;
const marksHeight2 = 1.88;

const marksBMI2 = marksWeight2/(marksHeight2 ** 2)

console.log("Marks BMI is : ", marksBMI2);

const johnWeight2 = 85;
const johnHeight2 = 1.76;

const johnBMI2 = johnWeight2/(johnHeight2 ** 2);

console.log("John BMI is : ", johnBMI2);

const markHigherBMI2 = marksBMI2 > johnBMI2;

console.log(markHigherBMI2);