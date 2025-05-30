// lab7.js
// Function that sorts the letters of a user's name (case-insensitive, ignores spaces)
// Austin Spencer
// May 2025

// Get the user's name using prompt
var userName = window.prompt("What's your name?");

// take a name, remove spaces, sort letters, return sorted name
function sortName(name) {
    // Remove spaces
    var noSpaces = name.replace(/\s+/g, '');
    // Convert to lowercase
    var lowerCase = noSpaces.toLowerCase();
    // Split into array, sort, and join
    var nameArray = lowerCase.split('');
    var sortedArray = nameArray.sort();
    var sortedName = sortedArray.join('');
    return sortedName;
}

// Call function and store result
var sorted = sortName(userName);

// Output result in a styled div
document.writeln('<div class="output-name">Here\'s your sorted name: ' + sorted + '</div>'); 