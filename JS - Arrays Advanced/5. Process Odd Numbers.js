function processOdd(inputArray){

    let result = [];
    for (let i = 0; i < inputArray.length; i++){
        let currentNumber = inputArray[i];
        if(i % 2 != 0){
            result.unshift(currentNumber * 2);
        }
    }
    return console.log(result.join(' '));
}

processOdd([10, 15, 20, 25])

processOdd([3, 0, 10, 4, 7, 3])