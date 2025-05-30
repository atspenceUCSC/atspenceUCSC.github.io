/*
  lab.js - This script handles my form and updates the page with my name and color
  Author: Austin Spencer <aspencer@ucsc.edu>
  Date: May 2025
  Requirements: jQuery must be loaded for this script to work.
*/

// when the form is submitted
$("#user-form").submit(function(event) {
  event.preventDefault(); // stop the page from reloading
  // get the name and color
  var name = $("#user-name").val();
  var color = $("#favcolor").val();
  // update the output div
  $("#output").html("<p>Hello, " + name + "! Nice color choice.</p>");
  // change the background color
  $("body").css("background-color", color);
}); 