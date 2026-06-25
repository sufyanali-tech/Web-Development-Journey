let input = document.querySelector("#operend-one");
let output = document.querySelector("#output");
let buttons = document.querySelectorAll("button");

let operent1 = "";
let operent2 = null;
let userValueStore = "";
let operatorStore = "";

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (["+", "-", "x", "÷", "mod"].includes(btn.textContent)) {

      if (operent2) {

        userValueStore = operent2;
        operent2 = null;
        operent1 = "";
        input.textContent = "0";
      } 
      else {
        
        userValueStore = operent1;
        operent1 = "";
        input.textContent = "0";
      }
      if (btn.textContent === "+") {
        operatorStore = btn.textContent;
      } else if (btn.textContent === "-") {
        operatorStore = btn.textContent;
      } else if (btn.textContent === "x") {
        operatorStore = btn.textContent;
      } else if (btn.textContent === "÷") {
        operatorStore = btn.textContent;
      } else if (btn.textContent === "mod") {
        operatorStore = btn.textContent;
      } else {
        operatorStore = btn.textContent;
      }
    } 
    else if (btn.textContent === "AC") {

      operent1 = "";
      operent2 = null;
      input.textContent = "0";
      output.textContent = "0";
    } 
    else if (btn.textContent === "=") {

      if (userValueStore.includes(".") || operent1.includes(".")) {
        
        if (userValueStore && operatorStore === "+") {

          operent2 =parseFloat(userValueStore) + parseFloat(operent1);
          output.textContent = operent2;

        } 
        else if (userValueStore && operatorStore === "-") {

          operent2 =parseFloat(userValueStore) - parseFloat(operent1);
          output.textContent = operent2;

        } 
        else if (userValueStore && operatorStore === "x") {

          operent2 =parseFloat(userValueStore) * parseFloat(operent1);
          output.textContent = operent2;
        } 
        else if (userValueStore && operatorStore === "÷") {

          operent2 =parseFloat(userValueStore) / parseFloat(operent1);
          output.textContent = operent2;
        } 
        else if (userValueStore && operatorStore === "mod") {

          operent2 =parseFloat(userValueStore) % parseFloat(operent1);
          output.textContent = operent2;
        }
      }

      else {

        if (userValueStore && operatorStore === "+") {

                operent2 = parseInt(userValueStore) + parseInt(operent1)
                output.textContent = operent2
            }
            else if (userValueStore && operatorStore === "-") {

                operent2 = parseInt(userValueStore) - parseInt(operent1)
                output.textContent = operent2
            }
            else if (userValueStore && operatorStore === "x") {

                operent2 = parseInt(userValueStore) * parseInt(operent1)
                output.textContent = operent2
            }
            else if (userValueStore && operatorStore === "÷") {

                operent2 = parseInt(userValueStore) / parseInt(operent1)
                output.textContent = operent2
            }
            else if (userValueStore && operatorStore === "mod") {
                
                operent2 = parseInt(userValueStore) % parseInt(operent1)
                output.textContent = operent2
            }
      }

    } 
    else if (btn.textContent === "del") {

      if (operent1 !== "") {
        operent1 = operent1.slice(0, -1);
        input.textContent = operent1;

        if (operent1 === "") {

          input.textContent = "0";
        }
      }
    } 
    else {

      operent1 += btn.textContent;
      input.textContent = operent1;
    }
  });
});
