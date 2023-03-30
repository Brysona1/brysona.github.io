"use strict"
const $ = selector => document.querySelector(selector);

let values = [];
var sorted = false;
let didSwap = false;
let onEven = true;
let k = 1;

// The statements in the setup() function
// execute once when the program begins
// The array is filled with random values in setup() function.
function setup() {
    let x = $("#content").offsetWidth;
    canvas = createCanvas(x, window.innerHeight * .9);
    canvas.parent('content');
    for (let i = 0; i < 10; i++) {
        values.push(random(height));
    }
}

// The statements in draw() function are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
    background(250);
    oddEvenSort();
    frameRate(10);
}
function swap(i, j) {
    let temp = values[i];
    values[i] = values[j];
    values[j] = temp;
    didSwap = true;
}
function oddEvenSort() {
    //perform one iteration of odd even sort
    didSwap = false;
    if (onEven) {
        if (values[k] > values[k + 1]) {
            swap(k, k + 1);
            sorted = false;
        }
    } else {
        if (values[k] > values[k + 1]) {
            swap(k, k + 1);
            sorted = false;
        }
    }

    //redraw values array
    for (let i = 0; i < values.length; i++) {
        stroke(100, 143, 143);
        if (i == k || i == k + 1) {
            if (didSwap) {
                fill(122, 189, 145); //green
            } else {
                fill(255, 105, 98); //red
            }
        } else {
            fill(50);
        }
        rect(i * (width / values.length), height, (width / values.length), -values[i], 20);
    }
    k += 2;
    if (k > values.length - 1) {
        if (onEven) {
            onEven = false;
            k = 0;
        } else {
            onEven = true;
            k = 1;
        }
        if (!sorted) {
            sorted = true;
        } else {
            noLoop();
        }
    }
}
const toggleAnimation = () => {
    if (isLooping()) {
        $("#toggleAnimation").value = "Manual";
        noLoop();
    } else {
        $("#toggleAnimation").value = "Auto";
        loop();
    }
}
const nextStep = () => {
    background(250);
    oddEvenSort();
}
document.addEventListener("DOMContentLoaded", () => {
    $("#toggleAnimation").addEventListener("click", toggleAnimation);
    $("#nextStep").addEventListener("click", nextStep);
});
function windowResized() {
    let x = $("#content").offsetWidth;
    resizeCanvas(x, window.innerHeight * .9);
}