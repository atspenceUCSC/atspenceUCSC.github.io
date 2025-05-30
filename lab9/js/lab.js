/*
  lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
  Author: Austin Spencer
  Date: May 2025
  Requirements: jQuery must be loaded for this script to work.
*/

// add button to challenge section
document.addEventListener("DOMContentLoaded", function() {
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");
  $("#problems").append("<button id='button-problems'>Make Special</button>");
  $("#results").append("<button id='button-results'>Make Special</button>");

  // click listener for challenge
  $("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
    $("#output").html("Challenge section toggled!");
  });
  // click listener for problems
  $("#button-problems").click(function(){
    $("#problems").toggleClass("special");
    $("#output").html("Problems section toggled!");
  });
  // click listener for results
  $("#button-results").click(function(){
    $("#results").toggleClass("special");
    $("#output").html("Results section toggled!");
  });
}); 