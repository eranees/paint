# Canvas Drawing App
This is a simple canvas drawing app implemented in JavaScript. It allows you to draw on a canvas element using your mouse. You can choose different colors for drawing and also clear the canvas.

# Features
1. Select different colors for drawing.
2. Start and stop drawing using the pencil tool.
3. Clear the canvas using the rubber tool.
# Usage
1. Clone the repository or download the files.
2. Open the index.html file in a web browser.
3. Use the mouse to draw on the canvas.
4. Click on the pencil button to activate the drawing tool.
5. Click on the rubber button to clear the canvas.
# Code Explanation
1. The main functionality of the canvas drawing app is implemented using JavaScript. Here's an overview of the code:
2. The array arr contains the different colors that can be selected for drawing.
3. The init function is responsible for initializing the color options on the page.
4. The canvas and context elements are retrieved using getElementById.
5. Event listeners are added to the canvas for mousedown, mouseup, and mousemove events to handle drawing actions.
6. The startPainting, stopPainting, and sketch functions are used to handle the drawing process.
7. The resize function is called to resize the canvas to the available window size.
8. The getPosition function updates the cursor coordinates based on the mouse event.
9. The selectColor function is used to choose a color for drawing.
10. The rubber tool clears the canvas by calling clearRect on the context.
11. The pencil tool sets the present flag to enable drawing.
12. The resize function resizes the canvas when the window size changes.
# License
* This project is licensed under the MIT License.
* Feel free to modify and use the code according to your needs.
* Enjoy drawing on the canvas!
