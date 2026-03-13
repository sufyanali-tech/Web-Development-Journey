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