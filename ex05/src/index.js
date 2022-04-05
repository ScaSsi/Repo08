// Write code below this line
var suma = 0;

function addThree() {
    suma = suma + 3;
    console.log("the sum from addThree: " + suma);
}

function addFive() {
    suma = suma + 5;
    console.log("the sum from addFive: " + suma);
}

addThree();
addFive();
// Write code above this line

module.exports = {
    addThree,
    addFive
};
