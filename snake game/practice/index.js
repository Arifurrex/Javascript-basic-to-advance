// ! canvas
// bangladesh flag
let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d'); 
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 370, 270);

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 389, 280);

let centerX = myCanvas.width / 2;
let centerY = myCanvas.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 50, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fill();