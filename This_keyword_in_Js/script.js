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

        console.log(this);  // refer to the object 
    }
}

myObj.sayName()


let Obj = {
    name : "Sufyan Ali",
    age : 20,
    sayName : function() {

        let arrowFnc = () => {
            console.log(this); // also refer the object because arrow function take the value of parent which is method
        };
        arrowFnc();
    }
}

Obj.sayName()


let anotherObject = {
    name : "Sufyan Ali",
    age : 20,
    sayName : function() {

        function abcd() {

            console.log(this); // refer to the window 
            
        } abcd()
    }
}
 
anotherObject.sayName()


let anotherObjectwithArrow = {
    name : "Sufyan Ali",
    age : 20,
    sayName : () => {

        console.log(this); // refer to the window because parent is anotherObjectwithArrow which is declare in global 
        
    }

}

anotherObjectwithArrow.sayName()

// this keyword value in class 

class Personal {

    constructor() {

        this.a = 20
        console.log(this); // refer to the black object 
        
    }
}

let newObject = new Personal()