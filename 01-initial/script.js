// Get canvas element from HTML file
var canvas = document.getElementById('drawing-area');

// Get the context of the element.
// We save it to a variable called `ctx`, short for `context`
var ctx = canvas.getContext('2d');

// // WEDO: Let's draw a rectangle with a red background
// ctx.fillStyle = 'red';
// ctx.fillRect(10, 20, 25, 50);
//
// // YOUDO: Draw another rectangle at (x: 60, y:10) with a
// // width of 100 and height of 100 that is green
// ctx.fillStyle = 'green';
// ctx.fillRect(60, 10, 100, 50);
//
// // WEDO: Let's draw a rectangle with a border only
// ctx.strokeStyle = 'blue';
// ctx.strokeRect(100, 100, 50, 50);
//
// // WEDO: Let's draw a rectangle with a border only
// ctx.strokeStyle = 'purple';
// ctx.strokeRect(25, 100, 50, 50);

// // WEDO: Set stroke width to 5 pixels
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 5
// ctx.strokeRect(100, 100, 50, 50);
//
// // YOUDO: Set with to 15
// ctx.strokeStyle = 'purple';
// ctx.lineWidth = 15
// ctx.strokeRect(25, 100, 50, 50);


// WE: Let's draw a line
// 1) move to x, y of 50, 50
ctx.moveTo(50, 50);

// 2) draw a line to 100, 50
ctx.lineTo(200, 50);
ctx.stroke()


// // WEDO: Draw a rectangle with white background
// ctx.clearRect(50, 50, 100, 100);
//
// // YOUDO: Clear whole canvas
// ctx.clearRect(0, 0, 500, 500);
//
// // WEDO: canvas gives us some values such as width and height
// ctx.clearRect(0, 0, canvas.width, canvas.height);
//
// // WEDO: Let's draw a rectangle the long way
// ctx.rect(10, 20, 25, 50);

// YOUDO: Create a rectangle with:
// x: 50
// y: 100
// width: 100
// height: 100
// stroke color: orange
// fill color: purple
// ctx.fillStyle = 'purple'
// ctx.strokeStyle = 'orange';
// ctx.lineWidth = 40;
// ctx.strokeRect(50, 100, 100, 100);
// ctx.fillRect(50, 100, 100, 100);


// Step 1
// // Draw a rectangle
// // rect(x, y, width, height)
// ctx.rect(10, 10, 50, 50);
//
// // But there is no color yet. Let's set a background (fill) color
// ctx.fillStyle = 'red';
//
// // Now let's apply that fill to the rectangle
// ctx.fill();
//
// // Let's try that again with green
// ctx.rect(30, 30, 50, 50);
// ctx.fillStyle = 'green';
// ctx.fill();
// // Oh no! We just made both our boxes green.

// Step 2

// // `beginPath` is ...
// ctx.beginPath();
// ctx.rect(10, 10, 50, 50);
// ctx.fillStyle = 'red';
// ctx.fill();
//
// ctx.beginPath();
// ctx.rect(100, 100, 50, 50);
// ctx.fillStyle = 'blue';
// ctx.fill();
//
//
// ctx.beginPath();
// ctx.rect(30, 30, 50, 50);
// ctx.fillStyle = 'green';
// ctx.fill();


// function circle(x, y, radius, fill, stroke) {
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, 2 * Math.PI);
//
//   if (fill) {
//     ctx.fillStyle = fill;
//     ctx.fill();
//   }
//
//   if (stroke) {
//     ctx.strokeStyle = stroke;
//     ctx.stroke()
//   }
// }
//
//
// // // arc(x, y, radius, startAngle, endAngle, anticlockwise)
// // // END GOAL
// //
// // HEAD
// // ctx.beginPath();
// // ctx.arc(150, 150, 100, 0, 2 * Math.PI);
// // ctx.fillStyle = 'yellow';
// // ctx.fill();
// // ctx.stroke();
//
// circle(150, 150, 100, 'yellow', 'black');
//
// // LEFT EYE
// // ctx.beginPath();
// // ctx.arc(110, 125, 10, 0, 2 * Math.PI);
// // ctx.fillStyle = 'black';
// // ctx.fill();
// // ctx.stroke();
//
// circle(110, 125, 10, 'black');
//
// // Right EYE
// // ctx.beginPath();
// // ctx.arc(190, 125, 10, 0, 2 * Math.PI);
// // ctx.fillStyle = 'black';
// // ctx.fill();
// // ctx.stroke();
// circle(190, 125, 10, 'black');
//
// // SMILE
// ctx.beginPath();
// ctx.arc(150, 175, 25, 0, Math.PI);
// ctx.lineTo(175, 175)
// ctx.fillStyle = 'white';
// ctx.fill();
// ctx.stroke();
