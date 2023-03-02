const calc = (numOne, numTwo, operator) => {
    switch (operator) {
        case 'multiply':
            let multiply = (numOne, numTwo) => numOne * numTwo;
            console.log(multiply(numOne, numTwo)); break;
        case 'divide':
            let divide = (numOne, numTwo) => numOne / numTwo;
            console.log(divide(numOne, numTwo)); break;
        case 'add':
            let add = (numOne, numTwo) => numOne + numTwo;
            console.log(add(numOne, numTwo)); break;
        case 'subtract':
            let subtract = (numOne, numTwo) => numOne - numTwo;
            console.log(subtract(numOne, numTwo)); break;
    }
}
calc(5,
    5,
    'multiply');
calc(40,
    8,
    'divide')
calc(12,
    19,
    'add')
calc(50,
    13,
    'subtract')

// 'Object' arrow function 

function calculator(a, b, operator) {
    const operations = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y
    };
    console.log(operations[operator](a, b));
}
calculator(5, 5, 'multiply');
calculator(40, 8, 'divide')
calculator(12, 19, 'add')
calculator(50, 13, 'subtract')
