// JavaScript Syntax and Operators
console.clear();

// Any variable with a value ('Hey', 10, etc..) or Boolean true is 'true'
// Any variable = false, null, NaN, undefined," " is 'false'


function truthyFalsy() {

    let price = 100;
    let color = 'red';
    let result;

    console.log(`Check for 'true' values`);

    // Truthy
    // Evaluate the expression 
    result = price > 10;
    console.log(result);

    // Test the expression
    if (price > 10) {
        console.log('price is > 10');
    }

    // Check if price has something other then zero
    if (price) {
        console.log('price is > 0');
    }

    // Check if color has characters in it
    if (color) {
        console.log('color has value');
    }
    console.log("");


    // Falsy
    console.log(`Check for 'false' value`);

    // Set value to null it becomes false
    color = null;
    console.log('color == null: ' + Boolean(color));

    // Set value to undefined it becomes false
    color = undefined;
    console.log('color == undefined: ' + Boolean(color));

    // Set value to null it becomes false
    color = " ";
    console.log('color == " : ' + Boolean(color));

    // Declare variable and dont't initialze, it is false
    let value;
    console.log(`let value: = ` + Boolean(value));


    // Set value to NaN it becomes false
    value = 100 / 'test';
    console.log('100/"test" = ' + Boolean(value));


};