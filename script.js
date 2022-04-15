// JavaScript Syntax and Operators
console.clear();

// Math Operators
function plusSign() {
    let price = 100;
    let stringsValue = '100';
    let result = 0;

    console.log('price = ' + price.toString()); //price = 100

    result = price + stringsValue;
    console.log('result (number + stringsValue) = ' + result.toString()); // result (number + stringsValue) = 100100
    
    result = price + (+stringsValue);
    console.log('result (number + (+stringsValue)) = ' + result.toString()); // result (number + (+stringsValue)) = 200
    
}