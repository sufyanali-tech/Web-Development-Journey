let main = document.querySelector("#main")

// main.addEventListener("mouseover",function() {

//     main.style.backgroundColor = "yellow";
// })
// main.addEventListener("mouseout",function() {

//     main.style.backgroundColor = "red";
// })

main.addEventListener("mousemove",function(val) {

    main.style.top = val.clientY + "px";
    main.style.left = val.clientX + "px";

})