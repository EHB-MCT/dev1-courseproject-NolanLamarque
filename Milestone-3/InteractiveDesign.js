"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let canvasWidth = context.canvas.width;
let canvasHeight = context.canvas.height;
let frameCount = 0;
let frameDelay = 100;


context.canvas.addEventListener("mousemove", FollowCursor);

/**
 * 
 * @param {MouseEvent} eventData
 */

function FollowCursor(eventData) {
    let frameDelay = 20;
    frameCount++;
    if (frameCount >= frameDelay) {
    frameCount = 0
    let x = eventData.pageX;
    let y = eventData.pageY;
    
    context.clearRect(0, 0, canvasWidth, canvasHeight); 
    context.fillStyle = "white";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    drawNight()
    drawSnail(x, 0, x, canvasHeight);
    drawShell(50, 50, 50, 50);
    Signature();
    }
    
}

drawNight();

function drawNight() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.stroke;
    let numBubbles = 35;
    for (let i = 0; i <= numBubbles; i++) {
        context.fillStyle = 'white';
        let y = Utils.randomNumber(15, canvasHeight - 15)
        let x = Utils.randomNumber(15, canvasWidth - 15)
        let bubbleSize = Utils.randomNumber(5, 25)
        Utils.fillCircle(x, y, bubbleSize)
        }
        
}

drawPearls();
function drawPearls() {
    context.stroke;
    frameCount++;
    if (frameCount >= frameDelay) {
        frameCount = 0;
        context.fillStyle = Utils.hsl(Utils.randomNumber(10, 500), 100, 50, 50);
        let y = Utils.randomNumber(15, canvasHeight - 15)
        let x = Utils.randomNumber(15, canvasWidth - 15)
        let bubbleSize = Utils.randomNumber(5, 25)
        Utils.fillCircle(x, y, bubbleSize)
        
    }
        requestAnimationFrame(drawPearls);

}


drawShell();
function drawShell(x1, y1, x2, y2) {

    context.lineWidth = 3;
    context.fillStyle = Utils.hsl(Utils.randomNumber(10, 500), 100, 50, 50);
    context.strokeRect(canvasWidth / 2 - x1 - 100, canvasHeight / 2 - y1 - 150, x2 + 350, y2 + 350);
    context.fillRect(canvasWidth / 2 - x1 - 100, canvasHeight / 2 - y1 - 150, x2 + 350, y2 +350);
    context.strokeRect(canvasWidth / 2 + x1, canvasHeight / 2 - y1, x2, y2);
    Utils.drawLine(canvasWidth / 2 + x1 + 200, canvasHeight / 2 + y1 + 75, canvasWidth / 2 - x2 - 25, canvasHeight / 2 + y2 + 75);
    Utils.drawLine(canvasWidth / 2 - x1 - 25, canvasHeight / 2 - y1 - 75, canvasWidth / 2 - x2 - 25, canvasHeight / 2 + y2 + 75);
    Utils.drawLine(canvasWidth / 2 + x1 + 125, canvasHeight / 2 - y1 - 75, canvasWidth / 2 - x2 - 25, canvasHeight / 2 - y2 - 75);
    Utils.drawLine(canvasWidth / 2 + x1 + 125, canvasHeight / 2 - y1 - 75, canvasWidth / 2 + x2 + 125, canvasHeight / 2 + y2 + 15);
    Utils.drawLine(canvasWidth / 2 + x1 + 125, canvasHeight / 2 + y1 + 15, canvasWidth / 2 + x2 - 50, canvasHeight / 2 + y2 + 15);
    Utils.drawLine(canvasWidth / 2 + x1 - 50, canvasHeight / 2 + y1 + 15, canvasWidth / 2 + x2 - 50, canvasHeight / 2 - y2);
    Utils.drawLine(canvasWidth / 2 + x1 - 50, canvasHeight / 2 - y1, canvasWidth / 2 + x2 + 50, canvasHeight / 2 - y2);
    context.stroke;

}

drawShell(50, 50, 50, 50);


drawSnail()

function drawSnail() {

    context.fillStyle = '#E3D4AD';
    context.strokeStyle = '#E3D4AD';
    context.fillRect(canvasWidth / 2 - 175, canvasHeight / 2 + 200, 525, 75);
    context.fillRect(canvasWidth / 2 + 275, canvasHeight / 2 + 175, 100, 75);
    context.fillRect(canvasWidth / 2 + 300, canvasHeight / 2 + 150, 100, 75);
    context.fillRect(canvasWidth / 2 + 325, canvasHeight / 2 - 50, 100, 250);
    context.fillRect(canvasWidth / 2 + 340, canvasHeight / 2 - 99, 25, 50);
    context.fillRect(canvasWidth / 2 + 385, canvasHeight / 2 - 99, 25, 50);
    context.fillRect(canvasWidth / 2 - 199, canvasHeight / 2 + 225, 25, 50);
    context.fillRect(canvasWidth / 2 - 223, canvasHeight / 2 + 250, 25, 25);

    context.fillStyle = Utils.hsl(Utils.randomNumber(10, 500), 100, 50, 50);
    context.fillRect(canvasWidth / 2 + 343, canvasHeight / 2 - 97, 20, 20);
    context.fillRect(canvasWidth / 2 + 387, canvasHeight / 2 - 97, 20, 20);
    context.fill;


}


Signature();
function Signature() {
context.fillStyle = 'lightgreen';
context.fillRect(canvasWidth - 150, canvasHeight - 150, 25, 50);
context.fillRect(canvasWidth - 175, canvasHeight - 100, 25, 25);
context.fillRect(canvasWidth - 125, canvasHeight - 100, 25, 25);
context.fillRect(canvasWidth - 200, canvasHeight - 125, 25, 25);
context.fillRect(canvasWidth - 100, canvasHeight - 125, 25, 25);
context.fillRect(canvasWidth - 200, canvasHeight - 75, 25, 50);
context.fillRect(canvasWidth - 100, canvasHeight - 75, 25, 50);


}


