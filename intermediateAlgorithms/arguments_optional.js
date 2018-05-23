
function addTogether() {
    var numOne = arguments[0];
    function addTwo(numTwo) {
        return typeof(numTwo) === 'number' ? numOne + numTwo : undefined;
    }
    return typeof(numOne) !== 'number' ? undefined : (arguments.length === 2 ? addTwo(arguments[1]) : addTwo);
}

addTogether(2,3);

// if 2 arguments add them together
// must be numbers
// if 1 argument send function back to get the second item