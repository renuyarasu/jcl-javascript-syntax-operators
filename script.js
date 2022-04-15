// JavaScript Syntax and Operators
console.clear();

// Math Operators
function mathOperators() {
    let price = 100;
    let result = 0;
    console.log('price = ' + price.toString());

    // Addition
    result = price + 100;
    console.log('price + 100 = ' + result.toString());

    // Subtraction
    result = price - 100;
    console.log('price - 100 = ') + result.toString();

    // Multiplication
    result = price * 10;
    console.log('price * 10 = ' + result.toString());

    // Division
    result = price / 10;
    console.log('price / 10 = ' + result.toString());

    // Exponentiation
    result = price ** 2;
    console.log('price ** 2 = ' + result.toString());

    //Modules
    result = price % 5;
    console.log('price % 5 = ' + result.toString());

    //Increment
    result = price++;
    console.log('result = price++ = ' + result.toString());
    console.log('price = ' + price.toString());
    result = ++price;
    console.log('result = ++price = ' + result.toString());

    //Decrement
    result = price--;
    console.log('result = price-- = ' + result.toString());
    console.log('price = ' + price.toString());
    result = --price;
    console.log('result = --price = ' + result.toString());

    

}