// JavaScript Syntax and Operators
console.clear();
'use strict'

let _product = [
    {
        productID: 01,
        productNumber: 'Book 01',
        name: 'The Power of A Positive Attitude Book',
        author: 'Roger Fritz',
        standardCost: 94.50,
        listPrice: 1000.50
    },
    {
        productID: 02,
        productNumber: 'Book 02',
        name: 'The Power of Your Subconscious Mind',
        author: 'Joseph Murphy',
        standardCost: 204.50,
        listPrice: 2000.50
    },
    {
        productID: 03,
        productNumber: 'Book 03',
        name: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        standardCost: 173.50,
        listPrice: 3000.50
    }

]
// Using typeof Operator
function typeofOperator() {
    let product = _product[0];
    let introDate = new Date();
    let stringValue = new String();
    let isActive = false;
    let result;
    let value = null;
}

console.log('_products = ' + typeof _product[0]); // product = object
console.log('product = ' + typeof _product);// product.productID = undefined
console.log('product.productID = ' + typeof _product.productID);// product.productNumber = undefined
console.log('product.productNumber = ' + typeof _product.productNumber); // _product.productNumber String
console.log('stringValue = ' + typeof stringValue); // stringValue = object
console.log('introDate = ' + typeof introDate); // introDate = object
console.log('isActive = ' + typeof isActive); // isActive = boolean
console.log('result = ' + typeof result); // result = undefined
console.log('value = ' + typeof value); // result = object
console.log('typeofOperator = ' + typeof typeofOperator); // typeofOperator = function










