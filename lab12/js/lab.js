/*
  lab.js - This script sorts your name into a house using conditionals
  Author: Austin Spencer <aspencer@ucsc.edu>
  Date: May 2025
  Requirements: jQuery must be loaded for this script to work.
*/

// function to sort a name into a house
function sortingHat(str) {
  var length = str.length;
  var mod = length % 4;
  if (mod == 0) {
    return "Gryffindor";
  } else if (mod == 1) {
    return "Ravenclaw";
  } else if (mod == 2) {
    return "Hufflepuff";
  } else {
    return "Slytherin";
  }
}

// when I click the button, sort the name and show the result
$("#button").click(function() {
  var name = $("#input").val();
  var house = sortingHat(name);
  $("#output").append('<p class="result">The Sorting Hat has sorted you into ' + house + '.</p>');
}); 