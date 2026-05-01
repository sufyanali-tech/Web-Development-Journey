// Scope 
// 1) Global Scope
// 2) Functional Scope
// 3) Block Scope

// 1) Global Scope
var firstVarible = 5
let secoundVariable = 10  

// 2) Functional Scope
function anyFuntion() {

    var functionalScope = 6
}

// 3) Block Scope
{
    let myName = "Sufyan Ali"
}

if(true) {

    let lastName = "Ali"
}

// Lexical and Dynamical Scoping in JS

function abcd() {

    let a = 20 // a is lexical scoped which is used in function efgh 
    function efgh() {

        console.log(a);
    }
    efgh()
}

abcd()  

// But JS don't follow the dynamic scoping 
let variable = 10

function Sufyan() {
 
    console.log(variable);  // Js is not dynamical Scoped language that why 10 is printing
    
}

function Ali() {

    let variable = 20;
    Sufyan()
}

Ali()