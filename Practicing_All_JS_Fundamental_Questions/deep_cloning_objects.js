//  deep cloning in Js

let user = {
    myName : "Sufyan Ali",
    age : 19,
    email : "test@test.com",
    address : {

        city : "Punjab",
    }
}

// let user2 = {...user};

// console.log(user2);


// console.log(user);
// console.log(user2);


let user2 =  JSON.parse(JSON.stringify(user))

user2.address.city = "Kpk"; 
console.log(user2);
console.log(user);

