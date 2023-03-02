function furnitureCalculation(input){

    let regex = />>(?<name>\w*)<<(?<price>\d*(\.\d*)?)!(?<quantity>\d*)/;
    let totalMoney = 0;
    let result = 'Bought furniture:'

    while(input[0] !== 'Purchase'){
        let command = input.shift();
        if(command.match(regex)){
            let currentPoduct =  regex.exec(command);
            totalMoney += currentPoduct.groups.price * currentPoduct.groups.quantity;
            result += `\n${currentPoduct.groups.name}`;
        }
    }
    console.log(`${result} \nTotal money spend:${totalMoney.toFixed(2)}`);
}

furnitureCalculation(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])