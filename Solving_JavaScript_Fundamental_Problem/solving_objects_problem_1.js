// 🟢 Level 1 (Basic)

// 1️⃣ Create an object car

// Properties

// brand
// model
// year

// Print all values.

let car = {
    brand : "Honda",
    model : "Civic",
    year : 2026
}

for (const key in car) {

    console.log(key,car[key]);
}