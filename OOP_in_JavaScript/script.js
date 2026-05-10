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
        console.log(h1);
        
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
    }
}

let emp1 = new Employee("Sufyan Ali",22,"Male","alikhattak5252@gmail.com","Employee")
let emp2 = new Employee("Rehan Ali",23,"Male","abc@gmail.com","Employee")
let emp3 = new Employee("Wasif Ali",25,"Male","xyz5252@gmail.com","Employee")

let mang1 = new Manager("Hussain Ali",22,"Male","jkl@gmail.com","Manager")

console.log(emp1.createEmp());
