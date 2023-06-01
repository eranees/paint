# Canvas Drawing App
This is a simple canvas drawing app implemented in JavaScript. It allows you to draw on a canvas element using your mouse. You can choose different colors for drawing and also clear the canvas.

# Features
Select different colors for drawing.
Start and stop drawing using the pencil tool.
Clear the canvas using the rubber tool.
# Usage
Clone the repository or download the files.
Open the index.html file in a web browser.
Use the mouse to draw on the canvas.
Click on the pencil button to activate the drawing tool.
Click on the rubber button to clear the canvas.
# Code Explanation
The main functionality of the canvas drawing app is implemented using JavaScript. Here's an overview of the code:
The array arr contains the different colors that can be selected for drawing.
The init function is responsible for initializing the color options on the page.
The canvas and context elements are retrieved using getElementById.
Event listeners are added to the canvas for mousedown, mouseup, and mousemove events to handle drawing actions.
The startPainting, stopPainting, and sketch functions are used to handle the drawing process.
The resize function is called to resize the canvas to the available window size.
The getPosition function updates the cursor coordinates based on the mouse event.
The selectColor function is used to choose a color for drawing.
The rubber tool clears the canvas by calling clearRect on the context.
The pencil tool sets the present flag to enable drawing.
The resize function resizes the canvas when the window size changes.
# License
This project is licensed under the MIT License.
Feel free to modify and use the code according to your needs.
Enjoy drawing on the canvas!
