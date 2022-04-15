// JavaScript Syntax and Operators
console.clear();

// Short Circuiting (&&)

function shortCircuitingAnd() {
    let result;
    // if first result is false, the second part is never evaluated
    result = isColorRed('Black') && isGreaterThen1400(1401);
}

function isColorRed(value) {
    console.log('in the isColorRed() function');
    return value == 'Red'
}
function isGreaterThen1400(value) {
    console.log('In the isGreaterThen1400() function');
    return value > 1400;
}

// Short Circuiting(||)

function shortCircuitingOr() {
    let result;

    console.log(" ");
    console.log('Calling isColorRed() first');
    //Each expression is evaluated until one returns a true
    result = isColorRed('Red') || isGreaterThen1400(200);

    //Each expression is evaluated until one returns a true
    // the rest are then skipped
    console.log(" ");
    console.log('Calling isGreaterThen1400() fisrt');
    result = isGreaterThen1400(200) || isColorRed('Black');

}