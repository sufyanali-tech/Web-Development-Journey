// Call 
 let obj = {
    name : "Sufyan Ali",
    age : 20
}

function abcd(a,b,c) {

    console.log(this,a,b,c);
}

abcd.call(obj,1,2,3) // using call we also pass obj now this value will be the object which we pass them in parameters


// Apply 

 let newObj = {
    name : "Sufyan Ali",
    age : 20
}

function efg(a,b,c) {

    console.log(this,a,b,c);
}

efg.apply(newObj,[1,2,3])  // apply only accept two parameters if values are greater then two pass them in array


// Bind 

let anotherObject = {

    name : "Sufyan Ali",
    age : 20
}

function newFnc(a,b,c) {

    console.log(this,a,b,c);
}

let fnc = newFnc.bind(anotherObject,1,2,3)  // bind returing the copy of the function but they don't call them by self like in call and apply
fnc()  