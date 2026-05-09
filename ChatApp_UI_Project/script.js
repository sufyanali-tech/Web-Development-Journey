let loginButton = document.querySelector("#login-btn");
let loginBanner = document.querySelector("#login-banner")

let storeLoginInputFields = null

loginButton.addEventListener("click", function () {

  storeLoginInputFields = loginBanner.innerHTML
  loginBanner.innerHTML = `
   <div id="login-with-number" class="login-with-number">
      <button type="button" id="country-selection" class="country-selection">
        <div class="left">
          <div class="flag">pk</div>
          <div class="flag-name">Pakistan</div>
        </div>
        <div class="down-side">▼</div>
      </button>
      <div
        id="country-code-selection"
        class="country-code-selection"
        style="display: none"
      >
        <input type="text" id="search-bar" class="search-bar" />
        <ul>
          <li>Pakistan</li>
          <li>Turkey</li>
          <li>jhdsf</li>
          <li>dsfs</li>
          <li>fdsa</li>
          <li>Pakistan</li>
        </ul>
      </div>
      <input
        id="telephone-number"
        class="telephone-number"
        type="tel"
        maxlength="15"
        placeholder="Enter phone number"
      />
      <div id="next-btn">
        <button type="button" id="next-button" class="next-button">Next</button>
      </div>
    </div>`

  let countrySelection = document.querySelector("#country-selection");
  let telephoneNumber = document.querySelector("#telephone-number")
  let nextButton = document.querySelector("#next-button")
  let countryCodeSelection = document.querySelector("#country-code-selection")
  countrySelection.addEventListener("click",function(e){

    countryCodeSelection.style.display = "inline"
    

  })
})