// JavaScript Syntax and Operators
console.clear();
'use strict'
// Detect the Error Type
// https://blog.bitsrc.io/types-of-native-errors-in-javascript-you-must-know-b8238d40e492

// ReferenceError
// RangeError
// TypeError
// URIError 
// SyntaxError
// EvalError

// Check fro type of error

function referenceError() {
    let result;
    try {
        // Reference Error because 'x' id not defiend
        result = x / 10;
    } catch (error) {
        handleError(error);
    }
}

function rangeError() {
    let result = 0;
    try {
        // RangeError because a number cannot have 200 significant digits 
        result.toPrecision(200);
    } catch (error) {
        handleError(error);
    }
}

function typeError() {
    let result = 0;
    try { // TypeError because resulyt is a numeric value
        result.toUpperCase();
    } catch (error) {
        handleError(error);
    }
}

function uriError() {
    let uri = 'https://github.com/renuyarasu/jcl-javascript%%%syntax%%%perators';
    try {// URI error
        decodeURI(uri);
    } catch (error) {
        handleError(error);
    }
}

function syntaxError() {
    try {
        // SyntaxError because missing a final single quote 
        let sum = eval("alert('Hi there!)");
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    switch (error.name) {
        case 'ReferenceError':
            console.log('ReferenceError: ' + error.message);
            break;
        case 'RangeError':
            console.log('RangeError: ' + error.message);
            break;
        case 'TypeError':
            console.log('TypeError: ' + error.message);
            break;
        case 'URIError':
            console.log('URIError: ' + error.message);
            break;
        case 'SyntaxError':
            console.log('SyntaxError: ' + error.message);
            break;
        case 'EvalError':
            console.log('EvalError: ' + error.message);
            break;
        default:
            console.log('Error Type: ' + error.name + ' - Message: ' + error.message);
            break;
    }
}