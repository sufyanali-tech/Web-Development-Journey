let h1 = document.querySelector("h1");

window.addEventListener("keydown",function(someValue) {

    if(someValue.key === " ") {
    
        h1.textContent = "Space Bar"
    }
    else {

        h1.textContent = someValue.key;
    }
})