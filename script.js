let arr = ["green", "yellow", "black", "maroon", "pink", "blue"]
init();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var isDrawing = false;
var present = 0;
var initialX, initialY;
var color = "black";

// rubber
document.getElementById('rubber').addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
// pen
document.getElementById('pencil').addEventListener("click", function () {
  document.getElementById('pencil').style.backgroundColor = "pink";
  present = 1;
});

resize(); // Resizes the canvas once the window loads
document.addEventListener('mousedown', startPainting);
document.addEventListener('mouseup', stopPainting);
document.addEventListener('mousemove', sketch);
window.addEventListener('resize', resize);

// Resizes the canvas to the available size of the window.
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// Stores the initial position of the cursor
let coord = { x: 0, y: 0 };

// This is the flag that we are going to use to
// trigger drawing
let paint = false;

// Updates the coordianates of the cursor when
// an event e is triggered to the coordinates where
// the said event is triggered.
function getPosition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

// The following functions toggle the flag to start
// and stop drawing
function startPainting(event) {
  if (present !== 1) return;
  paint = true;
  getPosition(event);
}
function stopPainting() {
  paint = false;
}

function sketch(event) {
  if (!paint) return;
  ctx.beginPath();

  ctx.lineWidth = 5;

  // Sets the end of the lines drawn
  // to a round shape.
  ctx.lineCap = 'round';

  ctx.strokeStyle = color;

  // The cursor to start drawing
  // moves to this coordinate
  ctx.moveTo(coord.x, coord.y);

  // The position of the cursor
  // gets updated as we move the
  // mouse around.
  getPosition(event);

  // A line is traced from start
  // coordinate to this coordinate
  ctx.lineTo(coord.x, coord.y);

  // Draws the line.
  ctx.stroke();
}


function selectColor(clr) {
  color = arr[clr];
}
function init() {
  let i = 1
  arr.forEach(element => {
    document.getElementById("color-" + i).style.background = element
    i++
  });
}




