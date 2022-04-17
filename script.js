// JavaScript Syntax and Operators
console.clear();


// Throw a Custom Error Object

function throwError() {
    try {
        attemptDivision();
    } catch (error) {
        console.log(error.message + ' - Error type: ' + error.name);
    }
}
function attemptDivision() {
    let result;
    try {
        result = x / 10;
    } catch (error) {
        // Always include at least a 'message' and 'name' properties.
        throw {
            'message': ' In the attemptDivision() method the following error occer: ' + error.message,
            'name': 'CustomError'
        };
    }
}