// Add

let inputField = document.querySelector("input");

function userInput(userValue) {

    if(userValue.data !== null) {

        console.log(userValue);  
    }
    
}

inputField.addEventListener("input",userInput)