function shoppingLis(input) {

    let shoppingProducts = input.shift().split('!');

    let command = input.shift();
    while (!command.includes("Go Shopping!")) {

        if (command.includes('Urgent')) {
            let [cmd, product] = command.split(' ');
            if (!shoppingProducts.includes(product)) {
                shoppingProducts.unshift(product)
            }
        } else if (command.includes('Unnecessary')) {
            let [cmd, product] = command.split(' ');
            if (shoppingProducts.includes(product)) {
                let index = shoppingProducts.indexOf(product);
                shoppingProducts.splice(index, 1);
            }
        } else if (command.includes('Correct ')) {
            let [cmd, oldProduct, newProd] = command.split(' ');
            if (shoppingProducts.includes(oldProduct)) {
                let index = shoppingProducts.indexOf(oldProduct);
                shoppingProducts[index] = newProd;
            }
        } else {
            let [cmd, product] = command.split(' ');
            if (shoppingProducts.includes(product)) {
                let index = shoppingProducts.indexOf(product);
                shoppingProducts.splice(index, 1);
                shoppingProducts.push(product);
            }
        }
        command = input.shift();
    }
    console.log(shoppingProducts.join(', '))
}

shoppingLis((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
)
shoppingLis((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)