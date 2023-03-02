function negativePositive(array) {

    let firstNum = Number(array.shift());
    let lastNum = Number(array.pop());

    return firstNum + lastNum;

}

console.log(negativePositive(['20', '30', '40']));

console.log(negativePositive(['5', '10']))