// JavaScript Syntax and Operators
console.clear();
// tryCatch
// finallyCatch
// finallySuccess

// Try, Catch
function tryCatch() {
    let result;
    try {
        result = x / 10;
    } catch (error) {
        console.log(error.message); // JavaScript error object always has 'name' and 'message' properties.
    }
}

// Finally Statement with Catch Blocks
function finallyCatch() {
    let result;
    try {
        console.log('An error will occure!');
        result = x / 10;
        } catch (error) {
        console.log(`In the "Catch" Block: ` + error.message);
    } finally {
        console.log(`In the 'Finally' block!`);
    }
}


// Finally Statement with Catch Success

function finallySuccess() {
    let result;
    let x = 100;
    try {
        console.log('An error will occure!');
        result = x / 10;
        console.log('This line will never run.');
    } catch (error) {
        console.log(`In the "Catch" Block: ` + error.message);
    } finally {
        console.log(`In the 'Finally' block!`);
    }
}

