let btn = document.querySelector("#btn");
let fileInput = document.querySelector("#fileinput");

btn.addEventListener("click",function(){

    fileInput.click();
})

fileInput.addEventListener("change",function(someValue) {

    // console.log(someValue.target.files[0].name);
    // btn.textContent = someValue.target.files[0].name;
    const file = someValue.target.files[0];
    if(file) {

        btn.textContent = file.name
    }
})