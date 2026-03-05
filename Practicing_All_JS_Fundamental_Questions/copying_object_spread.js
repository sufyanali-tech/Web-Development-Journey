let obj = {
    myName : "Sufyan Ali",
    age : 19,
    email : "test@test.com"
}

let obj2 = {...obj}

console.log(obj2);


// object assign

let obj3 = Object.assign({address : "Punjab"}, obj)

console.log(obj3);
console.log(obj);

