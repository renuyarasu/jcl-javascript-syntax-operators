// JavaScript Syntax and Operators
'use strict';

// Using a for-in Loop


function forInLoop() {
    let product = {
        'productID': 262,
        'name': 'The Psychology of Money',
        'productNumber': 'Psychology-262',
        'author': 'Morgan Housel',
        'standardCost': 320,
        'listPrice': 320,
        calculateGrossProfit: function () {
            return this.listPrice - this.standardCost;
        }
    };
    for (const key in product) { // 'in' keyword grabs all property and method names from an object.
        console.log("'" + key + "'=" + product[key]);
    }
}