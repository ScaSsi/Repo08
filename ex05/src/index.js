// Write code below this line
var suma = 0;

function addThree() {
    suma = suma + 3;
}

function addFive() {
    suma = suma + 5;
}

addThree()
console.log("sum from addThree: " + suma);
addFive()
console.log("sum from addFive: " + suma);
// Write code above this line

module.exports = {
    addThree,
    addFive
};
