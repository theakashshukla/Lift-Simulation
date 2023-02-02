var numOfFloors = document.getElementById("num_of-fl");
var numOfLifts = document.getElementById("num_of-li");
var buildButton = document.getElementById("build-btn");

buildButton.addEventListener("click", function () {
    buildFloors();
    buildLifts(); 
});

function buildFloors() {
    var numberOfFloors = numOfFloors.value;
    var floorsContainer = document.getElementById("floors");

    for (var i = 0; i < numberOfFloors; i++) {
        var floorButton = document.createElement("div");
        floorButton.innerHTML = "Floor " + (i + 1);
        floorsContainer.appendChild(floorButton);
    }
}

function buildLifts() {
    var numberOfLifts = numOfLifts.value;
    var liftsContainer = document.getElementById("lifts");

    for (var i = 0; i < numberOfLifts; i++) {
        var liftButton = document.createElement("div");
        div.className = "lift";
        // On this button i want to use style
        st

        liftButton.innerHTML = "Lift " + (i + 1);
        liftsContainer.appendChild(liftButton);
    }
}