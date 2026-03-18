let parent = document.querySelector("#parent");
let smaller = document.querySelector("#smaller");
let smallest = document.querySelector("#smallest");
let child = document.querySelector("#child");

// Bubbling Phase 

child.addEventListener(
    "click",
    function() {
        console.log("Child Click");
    },true
)
smallest.addEventListener(
    "click",
    function() {
        console.log("Smallest Click");
    },true
)
    
smaller.addEventListener(
    "click",
    function() {
        console.log("Smaller Click");
    }
)
parent.addEventListener(
    "click",
    function() {
        console.log("Parent Click");
        
    },true
) // Capture Phase