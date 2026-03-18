let parent = document.querySelector("#parent");

// Event Delegation 


parent.addEventListener(
    "click",
    function(value) {


        if (value.target.id === "child") {
            
            console.log("Child Clicked");
        }
         if (value.target.id === "smallest") {
            
            console.log("Smallest Clicked");
        } if (value.target.id === "smaller") {
            
            console.log("Smaller Clicked");
        } if (value.target.id === "parent") {
            
            console.log("Parent Clicked");
        }
        
    }
)