// Level 2 (Loop + Objects)

// 6️⃣ Print all keys of an object using for...in

// 7️⃣ Print all values using Object.values().

// 8️⃣ Print both key and value.

// Output example

// name : Sufyan
// age : 21

let obj = {
    myName : "Sufyan Ali",
    age : 19,
    email : "test@test.com"
}

for(const key in obj) {

    console.log(key);
    
}

console.log(Object.values(obj));


for(const key in obj) {

    console.log(key,obj[key]);
    
}