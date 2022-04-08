console.clear();
// JavaScript Syntax and Operators

function blockScopeProblem() {
    let productId = 2;
    switch (productId) {
        case 1: {
            let message = 'Product 1';
            console.log(message);
            break;
        }
        case 2: {
            let message = 'Product 2';
            console.log(message);
            break;
        }

        case 3: {
            let message = 'Product 3';
            console.log(message);
            break;
        }

        default:
            let message = 'No products available'
            console.log(message);
    }
}

// No products available