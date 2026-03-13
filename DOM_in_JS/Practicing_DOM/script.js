// 🟢 Level 1 — DOM Selection Practice
// 1️⃣ Select by ID

// Create HTML:

// <h1 id="title">Hello World</h1>

// Using JavaScript:

// Select this element

// Print its text in console.

let h1 = document.querySelector("#title");

console.log(h1.textContent);

// 2️⃣ Change Text

// Create:

// <p id="message">Old Message</p>

// Using DOM:

// Change text to:

// New Message Loaded

let p = document.querySelector("#message");

p.textContent = "New Message Loaded";


// 3️⃣ Select by Class

// Create 3 paragraphs with class text.

// Using JavaScript:

// Select all paragraphs

// Print them in console.

let allParagraph = document.querySelectorAll(".text")

console.log(allParagraph);

// 4️⃣ Change Style

// Create:

// <h2 id="heading">Learning DOM</h2>

// Using DOM:

// Change:

// text color → red

// font size → 40px

let h2 = document.querySelector("#heading");
h2.style.color = "red";
h2.style.fontSize = "40px";

// 5️⃣ Select by Tag Name

// Create 4 list items.

// Using JavaScript:

// select all li

// print them in console.

let listItems = document.querySelector(".unordered-list");

for(let i = 0; i < 4; i++) {

    let li = document.createElement("li");
    li.textContent = `list ${i}`;
    listItems.appendChild(li);

    console.log(li.textContent);
}