"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

alert("Draw your space invader here");

function alert() {

    context.fillStyle = 'balck';
    context.beginPath();
    context.rect(0, 0, 300, 300);
    context.stroke();
    context.fill();

    context.fillStyle = '#66FF33';
    context.beginPath();
    context.rect(110, 52, 50, 50);
    context.stroke();
    context.fill();

    context.fillStyle = '#66FF33';
    context.beginPath();
    context.rect(110, 202, 50, 50);
    context.stroke();
    context.fill();

    context.fillStyle = '#66FF33';
    context.beginPath();
    context.rect(10, 102, 100, 100);
    context.stroke();
    context.fill();

    context.fillStyle = '#66FF33';
    context.beginPath();
    context.rect(161, 102, 100, 100);
    context.stroke();
    context.fill();

}