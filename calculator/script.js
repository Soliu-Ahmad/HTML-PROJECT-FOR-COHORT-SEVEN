const screen = document.querySelector("#screen");
// screen.style.backgroundColor = "white"
const bttn = document.querySelector(".bttn");
const equal = document.querySelector(".green");
const clear = document.querySelector(".red");

let clickSound = new Audio ("mouse-click-304546.mp3")



function appendToDisplay(input) {
    clickSound.play()
    screen.value += input;
}


function clearDisplay() {
    clickSound.play()
    screen.value = "";
}


function calculate() {
    clickSound.play()
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "syntax errror";
    }

    
}