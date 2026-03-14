// Event Binding => addEventListener , removeEventListener


let h1 = document.querySelector("h1");

function dblclick() {

    h1.style.color = "red"
}

h1.addEventListener("dblclick",dblclick)
h1.removeEventListener("dblclick", dblclick);