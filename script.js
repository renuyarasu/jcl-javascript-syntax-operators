// JavaScript Syntax and Operators
'use strict';

let _product = [
    {
        'productID': 260,
        'name': 'The Psychology of Money',
        'productNumber': 'Psychology-262',
        'author': 'Morgan Housel',
        'standardCost': 320,
        'listPrice': 3200,
    },
    {
        'productID': 261,
        'name': 'Atomic Habits',
        'productNumber': 'Psychology-262',
        'author': 'James Clear',
        'standardCost': 321,
        'listPrice': 3211,
    },
    {
        'productID': 262,
        'name': 'Rich Dad Poor Dad',
        'productNumber': 'Psychology-262',
        'author': 'Robert T. Kiyosaki',
        'standardCost': 322,
        'listPrice': 3222,
    },
    {
        'productID': 263,
        'name': 'Ikigai',
        'productNumber': 'Psychology-262',
        'author': 'Hector Garcia',
        'standardCost': 333,
        'listPrice': 3333,
    },
    {
        'productID': 264,
        'name': 'The Courage to be Disliked',
        'productNumber': 'Psychology-262',
        'author': 'Ichiro Kishimi',
        'standardCost': 444,
        'listPrice': 4444,
    },
    {
        'productID': 265,
        'name': 'Think and Grow Rich',
        'productNumber': 'Psychology-262',
        'author': 'Napoleon Hill',
        'standardCost': 555,
        'listPrice': 55555,
    },
];


// Using a for-of loop


function forOfLoop() {
    for (const item of _product) {// 'of' keyword keeps track of which item in the array is currently being accessed.
        console.log(JSON.stringify(item));
    }

}
