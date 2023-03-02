function addOrSubtract(array){

    let newArray = [];
    let originSum = 0;
    let newSum = 0;

    for (let i = 0; i < array.length; i++){

        let currentNumber = +array[i];
        originSum += currentNumber;

        if(currentNumber % 2 == 0){
            currentNumber += i;
        } else {
            currentNumber -= i;
        }
        newArray.push(currentNumber);
        newSum += currentNumber;
    }
    console.log(newArray);
    console.log(`${originSum}\n${newSum}`);
}

addOrSubtract([5, 15, 23, 56, 35]);
addOrSubtract([-5, 11, 3, 0, 2]);