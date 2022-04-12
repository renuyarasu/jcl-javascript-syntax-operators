// JavaScript Syntax and Operators
'use strict';

// Labeled Statement: Define a location to "goto".

function labeledStatement() {
    even:
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1){
            continue even;
        }
        console.log(i);
    }
}