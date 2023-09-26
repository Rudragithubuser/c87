canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 5;
var x = 250;
var y = 210;
var r = 40;
var startAngle = 0;
var endAngle = 2 * Math.PI;
ctx.arc(x, y, r, startAngle, endAngle);
ctx.stroke();


/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/




// Similarly, create a black circle with position 350 and 210

// Similarly, create a red circle with position 210 and 40

// Similarly, create an orange circle with position 300 and 250

// Similarly, create a green circle with position 400 and 250



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
var x = 350;
var y = 210;
var r = 40;
var startAngle = 0;
var endAngle = 2 * Math.PI;
ctx.arc(x, y, r, startAngle, endAngle);
ctx.stroke();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
var x = 300;
var y = 250;
var r =40;
var startAngle = 0;
var endAngle = 2 * Math.PI;
ctx.arc(x, y, r, startAngle, endAngle);
ctx.stroke();
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
var x = 250;
var y = 210;
var r = 40;
var startAngle = 0;
var endAngle = 2 * Math.PI;
ctx.arc(x, y, r, startAngle, endAngle);
ctx.stroke();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
var x = 400;
var y = 250;
var r = 40;
var startAngle = 0;
var endAngle = 2 * Math.PI;
ctx.arc(x, y, r, startAngle, endAngle);
ctx.stroke();