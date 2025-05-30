// lab.js - Anonymous Functions and Callbacks Lab
// Austin Spencer
// May 2025

// Create an array of numbers
let numbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", numbers);

// Named function to square a number
function square(x) {
  // returns x squared
  return x * x;
}

// Test function
console.log("square(2):", square(2));
console.log("square(5):", square(5));

// Use map with named function
let squares = numbers.map(square);
console.log("Squares:", squares);

// Use map with anonymous function to add 5
let plusFive = numbers.map(function(x) {
  // adds 5 to each number
  return x + 5;
});
console.log("Numbers plus 5:", plusFive);

// Output results to the page in #output
document.addEventListener("DOMContentLoaded", function() {
  let out = document.getElementById("output");
  if (out) {
    out.innerHTML =
      '<b>Original numbers:</b> ' + numbers.join(", ") + '<br>' +
      '<b>Squares:</b> ' + squares.join(", ") + '<br>' +
      '<b>Numbers plus 5:</b> ' + plusFive.join(", ");
  }
});
