function oddNumbers(arg) {

    let number = +arg;
    let sumOfNumbers = 0;
    let startNumber = 1;

    for (let x = 1; x <= number; x++) {
        console.log(startNumber);
        sumOfNumbers += startNumber
        startNumber += 2;
    }
    console.log(`Sum: ${sumOfNumbers}`);
}

oddNumbers(5);

oddNumbers(3);