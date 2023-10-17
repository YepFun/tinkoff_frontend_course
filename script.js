const buttonSetRadius = document.getElementById("button-set-radius");
const buttonSetColor = document.getElementById("button-set-color");
const buttonSetRotation = document.getElementById("button-set-rotation");
const square = document.getElementById("square")

/**
 * deprecated
 */
function setStyleColor() {
    square.style.backgroundColor = "blue";
}

function changeColor() {
    square.classList.toggle("square-blue");
}
function changeRotation() {
    square.classList.toggle("square-rotated");
}
function changeBorderRadius() {
    square.classList.toggle("square-bordered");
}

buttonSetColor.addEventListener('click', changeColor());
buttonSetColor.addEventListener('click', changeRotation());
buttonSetColor.addEventListener('click', changeBorderRadius());

// console.log(buttonSetRadius);