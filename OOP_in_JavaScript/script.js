class User {

    constructor(name,age,gender,email) {

        this.userName = name
        this.userAge = age
        this.userGender = gender
        this.userEmail = email
    }
}

class Employee extends User {

    constructor(name,age,gender,email,role) {

        super(name,age,gender,email);
        this.empRole = role
    }
    createEmp() {
        let h1 = document.createElement("h1");
        h1.textContent = `User create with role : ${this.empRole}`
        document.body.appendChild(h1)
        
    }
}

class Manager extends User {

    constructor(name,age,gender,email,role) {

        super(name,age,gender,email);
        this.mangRole = role
    }
    createMang() {
        let h1 = document.createElement("h1");
        h1.textContent = `User create with role : ${this.mangRole}`        
        document.body.appendChild(h1)
    }
    remove() {
        document.querySelectorAll("h1").forEach(function(elem) {

            elem.remove()
        })
    }
}

let emp1 = new Employee("Sufyan Ali",22,"Male","alikhattak5252@gmail.com","Employee")

let mang1 = new Manager("Hussain Ali",22,"Male","jkl@gmail.com","Manager")

emp1.createEmp()
emp1.createEmp()
emp1.createEmp()
emp1.createEmp()

mang1.createMang()
mang1.createMang()

// mang1.remove()


// Prototypal inheritance in JS

let obj1 = {
    name: "Sufyan Ali",
    age: 22,
    hobby: function() {
        console.log("Playing Cricket");
        
    }
}

let obj2 = Object.create(obj1);

console.log(obj2.hobby);

obj2.meal = function() {
    console.log("I like home simple meal");
}
