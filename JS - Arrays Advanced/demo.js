function listProducts(inputArray) {

    let numbers = inputArray[0];
    let arrayNumbers = numbers.split(' ');

    for(let i = 1; i < inputArray.length; i++){
        let current = inputArray[i].split(' ');
        let command = current[0];
        let value = current[1];
        switch (command){
            case 'Add': arrayNumbers.push(value); break;
            case 'Remove': let index = arrayNumbers.indexOf(value); arrayNumbers.splice(index, 1); break;
            case 'RemoveAt': arrayNumbers.splice(Number(value), 1); break;
            case 'Insert': let valueTwo = Number(current[2]); arrayNumbers.splice(valueTwo, 0, value); break;
        }
    }
    return console.log(arrayNumbers.join(' '));
}

listProducts(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
