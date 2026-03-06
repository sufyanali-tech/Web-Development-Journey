// 2️⃣ Create object student

// name
// age
// grade

// Update age.

// 3️⃣ Add new property email to student.

// 4️⃣ Delete grade from student.

// 5️⃣ Check if property name exists.

let student = {
    studentName : "Sufyan Ali",
    age : 19,
    grade : "A"
}

student.age = 20
student.email = "sufyanali.dev@gmail.com"

console.log(student);

delete student.grade

console.log(student)

for(const key in student) {

    if(key === "studentName") {

        console.log("yes student name property is exist");
    }
}