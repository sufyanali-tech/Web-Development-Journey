let screenOutput = document.querySelector("#operend-one")
let buttons = document.querySelectorAll("button");
let userValueStoring = null

buttons.forEach(function(btn) {

    btn.addEventListener("click", function() {

        // console.log(btn.textContent);
        screenOutput.textContent = btn.textContent

    })
})