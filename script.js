// JavaScript Syntax and Operators
'use strict';

// looping over a string

function loopString() {
    let bookName = 'Think and Grow Rich';
    let letters = '';
    for (const chat of bookName) {
        letters += chat
    }
    console.log(letters);
}