function printSum(arg1, arg2){

    let start = +arg1;
    let finish = +arg2;
    let sumOfNumbers = 0;
    let numbers = "";

    for (let x = start; x <= finish; x++){
        sumOfNumbers += x;
        numbers += x + " ";
    }

    console.log(numbers);
    console.log(`Sum: ${sumOfNumbers}`);
}

printSum(5, 10)

printSum(0, 26)

printSum(50, 60)