function sorting(inputArray){


    const sorted = inputArray.sort((a, b) => a - b);
    var half_length = Math.ceil(inputArray.length / 2); 
    let firstHalf = inputArray.slice(0, half_length)
    let secondHalf = inputArray.slice(-half_length).reverse();
    let newArray = [];

    for(let i = 0;i < secondHalf.length; i++){
        let firstNum = secondHalf[i];
        let secondNum = firstHalf[i];
        newArray.push(firstNum);
        newArray.push(secondNum);
    }
    return console.log(newArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
