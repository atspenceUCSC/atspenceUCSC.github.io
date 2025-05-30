// lab.js - FizzBuzzBoom Loops
// Author: Austin Spencer <aspencer@ucsc.edu>
// Date: 2025-05-26

// Loop from 1 to 200 and print Fizz, Buzz, Boom, or combos
for (let i = 1; i <= 200; i++) {
  let str = "";
  if (i % 3 === 0) str += "Fizz";
  if (i % 5 === 0) str += "Buzz";
  if (i % 7 === 0) str += "Boom";
  if (str === "") str = i;
  $("#output").append("<p>" + str + "</p>");
} 