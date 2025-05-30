// Lab 6: Arrays and Objects

// Austin Spencer <atspence@ucsc.edu>


// Array
var myTransport = ["bus", "bike", "rideshare", "walking", "car"];

// Object for main ride
var myMainRide = {
    make: "Toyota",
    model: "Corolla",
    color: "silver",
    year: 2010,
    ownIt: true
};

// Output array
document.writeln("Getting around: " + myTransport.join(", ") + "<br>");

// Output 2
document.writeln("My Main Ride: <pre>" + 
    JSON.stringify(myMainRide, null, '\t') + "</pre>");