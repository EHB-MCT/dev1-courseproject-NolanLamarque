"use strict";

alert("Draw your space invader here");

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


Signature();
function Signature() {

context.fillStyle = 'black';
context.fillRect(50, 50, 300, 300);
context.fillStyle = 'lightgreen';
context.fillRect(175, 75, 50, 100);
context.fillRect(125, 175, 50, 50);
context.fillRect(225, 175, 50, 50);
context.fillRect(75, 125, 50, 50);
context.fillRect(275, 125, 50, 50);
context.fillRect(275, 225, 50, 100);
context.fillRect(75, 225, 50, 100);


}