// JavaScript Syntax and Operators
console.clear();

// Math Operators: Comparison and Ternary Operators
function comparisonOperators() {
    let price = 100;
    let result = 0;

    console.log('price = ' + price.toString());
    console.log('');

    // Equal to
    console.log('price == price = ' + (price == price).toString()); // true

    // Equal to
    result = price.toString();
    console.log('price(number) == result(string) = ' + (price == result).toString()); // true

    // Equal to / Equal type
    result = price;
    console.log('price(number) === result(string) = ' + (price === result).toString()); // true

    // Equal to / Equal type
    result = price.toString();
    console.log('price(number) === result(string) = ' + (price === result).toString()); // false
    console.log('');


    // Not Equal to
    result = 100;
    console.log('result = ' + result.toString());
    console.log('price(number) != result(string) = ' + (price != result).toString()); // false

    // Not Equal to / Not Equal type
    result = price.toString();
    console.log('price(number) !== result(string) = ' + (price !== result).toString()); // true
    console.log('');

    // Greater Then 
    console.log('price > 10 = ' + (price > 10).toString()); // true

    // Greater Then or equal to 
    console.log('price >= 10 = ' + (price >= 10).toString()); // true
    console.log("");

    // Less Then 
    console.log('price < 10 = ' + (price < 10).toString()); // false

    // Less Then or equal to 
    console.log('price <= 10 = ' + (price <= 10).toString()); // false
    console.log("");

    // Ternary Operator
    result = price < 1500 ? 'less then 1500 ' : 'greater then 1500.';
    console.log('Ternary Operator = ' + result);

}







