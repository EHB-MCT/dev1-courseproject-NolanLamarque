"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let canvasWidth = context.canvas.width;
let canvasHeight = context.canvas.height;

drawNight();

function drawNight() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.stroke;
    let numBubbles = 150;
    for (let i = 0; i <= numBubbles; i++) {
        context.fillStyle = 'white';
        let y = Utils.randomNumber(15, canvasHeight - 15)
        let x = Utils.randomNumber(15, canvasWidth - 15)
        let bubbleSize = Utils.randomNumber(5, 15)
        Utils.fillCircle(x, y, bubbleSize)
    }

}


drawShell();

function drawShell() {

    context.lineWidth = 3;
    context.fillStyle = Utils.hsl(Utils.randomNumber(10, 500), 100, 50, 50);
    context.strokeRect(canvasWidth / 2 - 150, canvasHeight / 2 - 200, 400, 400);
    context.fillRect(canvasWidth / 2 - 150, canvasHeight / 2 - 200, 400, 400);
    context.strokeRect(canvasWidth / 2 + 50, canvasHeight / 2 - 50, 50, 50);
    Utils.drawLine(canvasWidth / 2 + 250, canvasHeight / 2 + 125, canvasWidth / 2 - 75, canvasHeight / 2 + 125);
    Utils.drawLine(canvasWidth / 2 - 75, canvasHeight / 2 - 125, canvasWidth / 2 - 75, canvasHeight / 2 + 125);
    Utils.drawLine(canvasWidth / 2 + 175, canvasHeight / 2 - 125, canvasWidth / 2 - 75, canvasHeight / 2 - 125);
    Utils.drawLine(canvasWidth / 2 + 175, canvasHeight / 2 - 125, canvasWidth / 2 + 175, canvasHeight / 2 + 65);
    Utils.drawLine(canvasWidth / 2 + 175, canvasHeight / 2 + 65, canvasWidth / 2, canvasHeight / 2 + 65);
    Utils.drawLine(canvasWidth / 2, canvasHeight / 2 + 65, canvasWidth / 2, canvasHeight / 2 - 50);
    Utils.drawLine(canvasWidth / 2, canvasHeight / 2 - 50, canvasWidth / 2 + 100, canvasHeight / 2 - 50);
    context.stroke;

}


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