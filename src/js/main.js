var buildButton = document.querySelector("#myButton");// get the button element
var buildButton = document.querySelector("#myButton");
var buildButton = document.querySelector("#build-btn");

buildButton.addEventListener("click", function () {
    buildLifts();
    buildfloors();
});

function buildfloors() {

}

// function to generate multiple buttons with input text
function buildLifts() {
    // get input value
    // var inputValue = document.querySelector("#build-btn").value;

    // get number of buttons to generate
    var numberOfButtons = document.querySelector("#num_of-fl").value;

    // loop to create and append buttons
    for (var i = 0; i < numberOfButtons; i++) {
        // create button element
        var button = document.createElement("button");
        // set button text
        // button.innerHTML = inputValue;
        // append button to container element
        document.querySelector("#container").appendChild(button);
    }
}

// // function to generate multiple buttons with input text
// function generateButtons() {
//     // get input value
//     var inputValue = document.querySelector("#input").value;

//     // get number of buttons to generate
//     var numberOfButtons = document.querySelector("#numberOfButtons").value;

//     // loop to create and append buttons
//     for (var i = 0; i < numberOfButtons; i++) {
//         // create button element
//         var button = document.createElement("button");
//         // set button text
//         button.innerHTML = inputValue;
//         // append button to container element
//         document.querySelector("#container").appendChild(button);
//     }
// }
