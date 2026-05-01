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

