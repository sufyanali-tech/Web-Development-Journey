// Add Event 

let inputField = document.querySelector("input");

function userInput(userValue) {

    if(userValue.data !== null) {

        console.log(userValue.data);  
    }
    
}

inputField.addEventListener("input",userInput)

// Change Event

let sel = document.querySelector("select");
let h3 = document.querySelector("#Laptop")

sel.addEventListener("change",function(value) {

    h3.textContent = `${value.target.value} Laptop Selected`;
    
})