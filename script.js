// JavaScript Syntax and Operators
console.clear();

// Logical Operators

function logicalOperators() {
    let price = 100;

    //AND (&&) Operators
    if (price > 10 && price < 1000) {
        console.log('price > 10 && price < 1000 is "true"');
    }

    //AND (&&) Operators

    if (price > 10 && price > 1000) {
        console.log('price > 10 && price < 1000 is "true"');
    } else {
        console.log('price > 10 && price < 1000 is "false"');
    }

    //OR (||) Operators

    if (price > 10 || price < 1000) {
        console.log('price > 10 || price < 1000 is "true"');
    } else {
        console.log('price > 10 || price < 1000 is "false"');
    }
    //NOT ! Operators
    if (!(price > 10)) {
        console.log('!(price > 10) is "true"');
    }
    
};