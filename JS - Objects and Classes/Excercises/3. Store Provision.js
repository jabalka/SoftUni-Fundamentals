function storeProvision(stock, orderedProducts) {

    let shop = {};

    for (let i = 0; i < stock.length; i += 2) {

        const element = stock[i];
        shop[element] = Number(stock[i + 1]);
    }

    for (let j = 0; j < orderedProducts.length; j += 2) {

        const element = orderedProducts[j];
        if (!shop.hasOwnProperty(element)) {
            shop[element] = 0
        }
        shop[element] += Number(orderedProducts[j + 1]);
    }
    Object.keys(shop).forEach((x) => 
    console.log(`${x} -> ${shop[x]}`));
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)