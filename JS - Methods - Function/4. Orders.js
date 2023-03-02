totalPrice('water', 5);
totalPrice('coffee', 2);

function totalPrice(product, quantity) {
    let price = 0;
    switch (product) {
        case 'coffee': price = 1.50 * quantity; break;
        case 'water': price = 1.00 * quantity; break;
        case 'coke': price = 1.40 * quantity; break;
        case 'snacks': price = 2.00 * quantity; break;
    }
    console.log(price.toFixed(2));
}


// can not acces the function below before its initalized as the one above!!!

const cost = (product, quantity) => {
    let cost = 0;
    switch (product) {
        case 'coffee': cost = 1.50 * quantity; break;
        case 'water': cost = 1.00 * quantity; break;
        case 'coke': cost = 1.40 * quantity; break;
        case 'snacks': cost = 2.00 * quantity; break;
    }
    console.log(cost.toFixed(2));
}
cost('water', 5)
cost('coffee', 2)