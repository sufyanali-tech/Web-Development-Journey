// Protect From errors
let role = "IT Admin";

let obj = {

    myName : "Sufyan Ali",
    age : 19,
    email : "test@test.com",
    [role] : "Sufyan Ali", // Computed Properties
    addresss : {

    
        city : "Punjab"
    }
}

console.log(obj?.address?.city);
