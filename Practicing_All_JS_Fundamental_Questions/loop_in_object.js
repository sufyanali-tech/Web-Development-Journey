let obj = {
    myName : "Sufyan Ali",
    age : 19,
    email : "test@test.com"
}

 for(let key in obj) {

    console.log(key);
 }

 // Accessing the key and key value of object 
 
 for(let key in obj) {

    console.log(key , obj[key]);
 }