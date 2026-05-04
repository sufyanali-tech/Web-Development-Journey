let loginButton = document.querySelector("#login-btn");
let loginBanner = document.querySelector("#login-banner")

let storeLoginInputFields = null

loginButton.addEventListener("click", function () {

    storeLoginInputFields = loginBanner.innerHTML
    loginBanner.innerHTML = `
    <div id="login-with-number" class="login-with-number">
      <select id="country-select" >
        <option value="">United States</option>
        <option value="">Pakistan</option>
        <option value="">Saudi Arabia</option>
        <option value="">United Arab Emirate</option>
        <option value="">Qatar</option>
      </select>
      <input
        id="telephone-number"
        class="telephone-number"
        placeholder="Enter your phone number"
        type="tel"
        maxlength="15"
      />
       <div id="next-btn">
        <button type="button" id="next-button" class="next-button">Next</button>
       </div>
    </div>`


})