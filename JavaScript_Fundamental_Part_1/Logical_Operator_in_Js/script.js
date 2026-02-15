const scoreDolphins = true
const scoreKoalas = false

if (scoreDolphins && scoreKoalas) {
    
    console.log("Both are True");
}
else {

    console.log("Both are not True");
}
 
if (scoreDolphins || scoreKoalas) {
    
    console.log("One of them is true");
}
else {

    console.log("Both are false");
}
 
console.log("Not operator : ",!scoreDolphins);

if (scoreDolphins != scoreKoalas) {
    
    console.log("They both are different Values");
}
else {

    console.log("They both are same values");
    
}