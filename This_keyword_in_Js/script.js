// this keyword value in Global 

console.log(this); // window

// this keyword value in Function

function abcd() {

    console.log(this); // window
    
}
abcd() 

// this keyword value in event handler 
document.querySelector("h1").addEventListener("click",function() {

    console.log((this.style.color = "red")); // element in which event handler apply
})

// this keyword value inside object method(mean function inside the object)

let myObj = {
    name : "Sufyan Ali",
    age : 20,
    sayName : function() {

        console.log(this.name);  // refer to the object 
    }
}

myObj.sayName()


