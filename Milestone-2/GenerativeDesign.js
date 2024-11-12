"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let canvasWidth = context.canvas.width;
let canvasHeight = context.canvas.height;


drawShell();

function drawShell() {

    context.lineWidth = 3;
    context.fillStyle = Utils.hsla(Utils.randomNumber(10, 500), 100, 50, 50);
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