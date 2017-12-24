// Making Calculator function

function Calculator() {
    this.adder = function (a, b) {
        return a + b;
    };
    this.substractor = function (a, b) {
        var result = Math.abs(a - b);
        return result;
    };
    this.multiplier = function (a, b) {
        return a * b;
    };
}

// Exporting the function
module.exports = Calculator;