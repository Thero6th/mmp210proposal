/*
p5+arduino sketch proposal slides
11.12.2019
*/

var slideNumber = 0;
var totalSlides = 3;

var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 50;

var prevBtnX = 100;
var prevBtnY = 500;
var prevBtnW = 100;
var prevBtnH = 50;

function preload() {
    accelerometer = loadImage("accel.jpg");
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(200);

    if (slideNumber == 0) {
        // content for slide number 0
        fill(255);
        text("arial");
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Final Project Pitch", width / 2, height / 2);

        textSize(30);
        text("by Anthony Ortiz", width / 2, height / 2 + 50);

    } else if (slideNumber == 1) {
        // content for slide number 1

        fill(500);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Accelerometer", width / 2, 200);

        textSize(20);
        textAlign(600, 600);
        text("The sensor will indicate its position.", width / 3, height - 300);
        text("as the user manuovers the accelerometer,", width / 2, height - 200);
        
        image(accelerometer, 0, 0, width, height);

    } else if (slideNumber == 2) {
        rect(50, 50, 100, 100);
        rect(650, 50, 100, 100);
        rect(350, 350, 100, 100);
        
    } else if (slideNumber == 2)


    /* drawing buttons */

    // next btn
    if (slideNumber < totalSlides - 1) {
        fill(255);
        noStroke();
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next", nextBtnX, nextBtnY);
    }


    // prev btn
    if (slideNumber > 0) {
        fill(255);
        noStroke();
        rect(50, 475, prevBtnW, prevBtnH);
        fill(0);
        textSize(20);
        textAlign(500, 500);
        text("Previous", prevBtnX, prevBtnY);
    }


}

function mousePressed() {

    // next btn
    var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
    if (d < nextBtnSize / 2 && slideNumber < totalSlides - 1) {
        slideNumber++;
    }

    // prev btn
    if (mouseX > prevBtnX &&
        mouseX < prevBtnX + prevBtnW &&
        mouseY > prevBtnY &&
        mouseY < prevBtnY + prevBtnH &&
        slideNumber > 0) {
        slideNumber--;
    }
}
