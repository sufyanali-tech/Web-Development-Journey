// Coversion in JS
// Coversion in Js is to manually covert the type of the Value but the actually value is not be change For Example

const anyString = "20";
console.log(Number(anyString),anyString);

const anyNumber = 100;
console.log(String(anyNumber),anyNumber); // Only change the copy not actully variable type

// Converting Character String to the Number 
const charString = "Sufyan";
console.log(Number(charString),charString);  // Nan only covert the Invalid Number because of character

const anyBoolean = false;
console.log(Number(anyBoolean),anyBoolean);
console.log(String(anyBoolean),anyBoolean);


// Coercion 
// Js is automatically covert the type of the value For Example

const coercionInJs = "2" + 2;
console.log(coercionInJs,typeof(coercionInJs)); // + Operator Concatinate and covert the value into string

const a = 2 + 2 + "5" + 5 + 7;
console.log(a);

const b = "2" - "2";
console.log(b); // (-) Operator is the Opposite of the (+) this convert the string into Number to perform real calculation

const c = "2" * "2";
console.log(c);

const d = "2" / "2";
console.log(d);  // Also that (-) (*) (/) Also same as the opposity form the (+) Operator 
