//  (==) Lose equality operator to check the condition but not recomemded because of coercion of Js For Example

const anyNumber = "18";

if (anyNumber == 18) {
    
    console.log("Yes the Number is 18");
} // Js Coercion convert "18" string to number 

//  (===) Strict equality operator to check the condition with sticitly For Example

const anyOtherNumber = "20";

if (anyOtherNumber === 20) {
    
    console.log("The Number is 20 ...");
}
else {

    console.log("No the Number is not 20 Strictly check"); // Mostly we are using this 
}

// also that (!=) lose 
// (!==) strict