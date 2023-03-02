// while customer has not been specified (special/regular) parts prices will receive
function compStore(input) {

    let customerTyper = input.pop();
    let price = 0;
    let taxes = 0;
    let totalPrice = 0;

    let command = input.shift();

    while (command) {
        // if price is < 0 then print 'Invalid price!' and continue with next price
        if (Number(command) < 0) {
            console.log('Invalid price!');
        } else {
            price += Number(command);
            // tax is 20% of each price
            taxes += Number(command) * 0.20;
        }
        command = input.shift();
    }
    // if customer is special - 10% discount
    if (customerTyper == 'special') {
        totalPrice += (price + taxes) * 0.9;
    } else {
        totalPrice += (price + taxes)
    }
    // if total price == 0 then print 'Invalid order!'
    if (totalPrice === 0) {
        console.log(`Invalid order!`);
    } else {

        // the prices should be displayed on 2nd decimal point!
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${price.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$
        `)
    }
    console.log('*******END*******');
}

compStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
)

compStore(([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
)

compStore(([
    'regular'
])
)



input = input.split(' ').map(Number);
for(let i = 0; i < input.length; i++){
    let currentWagon = input[i];
    if(currentWagon != maxInWagon){
        input[i] += maxInWagon - currentWagon;
        peopleQue -= maxInWagon - currentWagon
    }
}