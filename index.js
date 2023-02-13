
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
let drum_buttons = document.querySelectorAll(".drum");
let drum_sound_mapper = {
    "w": "sounds/tom-1.mp3",
    "a": "sounds/tom-2.mp3",
    "s": "sounds/tom-3.mp3",
    "d": "sounds/tom-4.mp3",
    "j": "sounds/crash.mp3",
    "k": "sounds/kick-bass.mp3",
    "l": "sounds/snare.mp3"
}

for (let i = 0; i < drum_buttons.length; i++) {
    drum_buttons[i].addEventListener("click", function () {
        this.style.color = "white";
        // Other approach is using Switch statement: https://www.w3schools.com/js/js_switch.asp
        let sound_to_play = drum_sound_mapper[this.getInnerHTML()]
        var audio = new Audio(sound_to_play);
        audio.play();
    }
    );
}


document.addEventListener("keydown", function (event) {
    let sound_to_play = drum_sound_mapper[event.key];
    if (sound_to_play !== "") {
        document.querySelector("."+ event.key + ".drum").style.color = "white";
        var audio = new Audio(sound_to_play);
        audio.play();
    }

}
);

function sum(num1, num2) {
    return num1 + num2
};

function multiply(num1, num2) {
    return num1 * num2
};

function subttract(num1, num2) {
    return num1 - num2
};

function calculator(num1, num2, operator) {
    return operator(num1, num2)
};


// building an object with Javascript
function SnowflakeDDLHandler(input_file, output_file) {
    this.input_file = input_file;
    this.output_file = output_file;
    this.write_output = function () { alert("Writing output file...") }
};

var handler = new SnowflakeDDLHandler("ifile.txt", "ofile.txt");