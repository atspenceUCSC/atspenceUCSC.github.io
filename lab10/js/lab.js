/*
  lab.js - This script adds random text to the output div when I click the button
  Author: Austin Spencer <aspencer@ucsc.edu>
  Date: May 2025
  Requirements: jQuery must be loaded for this script to work.
*/

// helper function to make random text
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}

// jQuery version for the button click
$(document).ready(function() {
  $("#make-convo").click(function() {
    // get new random text
    var newText = generateRandomText();
    // append a new div to output
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });
});

// (Vanilla JS version for reference, not used)
// var button = document.getElementById("make-convo");
// var output = document.getElementById("output");
// button.addEventListener("click", function() {
//   var newText = generateRandomText();
//   var newDiv = document.createElement("div");
//   newDiv.className = "text";
//   newDiv.innerHTML = "<p>" + newText + "</p>";
//   output.appendChild(newDiv);
// }); 