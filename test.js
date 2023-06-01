window.onload = function () {

  var canvas = document.getElementById("canvas");
  // Get the 2D rendering context
  var context = canvas.getContext("2d");

  let arr = ["green", "yellow", "black", "maroon", "pink", "blue"]
  let i = 1
  arr.forEach(element => {
    document.getElementById("color-" + i).style.background = element
    i++
  });
  let present = 0
  document.getElementById('pencil').addEventListener("click", function () {
    document.getElementById('pencil').style.backgroundColor = "pink";
    present = 1
  });
  // drawPixel();
  canvas.addEventListener("mousemove", function (event) {
    console.log("tt")
    if (present == 1) {
    }
  })
}


function drawRectangle() {
  // Get the canvas element
  var canvas = document.getElementById("canvas");

  // Get the 2D rendering context
  var context = canvas.getContext("2d");

  canvas.addEventListener("click", function (event) {
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw rectangle
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    context.fillRect(10, 20, 50, 50);
  });
}
function drawCircle() {
  // Get the canvas element
  var canvas = document.getElementById("canvas");

  // Get the 2D rendering context
  var context = canvas.getContext("2d");
  canvas.addEventListener("click", function (event) {
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    context.beginPath();
    context.arc(x / 2, y / 2, 10, 0, Math.PI * 2);
    context.fill();
  });
}

function drawLine(event) {

  canvas.addEventListener("click", function (event) {
    // Get the canvas element
    var canvas = document.getElementById("canvas");

    // Get the 2D rendering context
    var context = canvas.getContext("2d");
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw line
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(20, 20);
    context.stroke();
  });


}

function drawPixel() {
  // Get the canvas element
  var canvas = document.getElementById("myCanvas");

  // Get the 2D rendering context
  var context = canvas.getContext("2d");

  // Set drawing properties
  var pixelSize = 1;

  // Function to draw a pixel
  function drawPixel(x, y) {
    context.fillRect(x, y, pixelSize, pixelSize);
  }

  // Function to handle mouse click
  function handleClick(event) {
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    drawPixel(x, y);
  }

  // Add event listener for mouse click
  canvas.addEventListener("click", handleClick);
}