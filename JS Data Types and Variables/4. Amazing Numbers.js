function amazingNumbers(number){

    number = number.toString();
    let sum = 0;
    for (let char = 0; char < number.length; char++){
        let num = number[char];
        sum += +num;
    }
    if (sum === 9){
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}

amazingNumbers(1233)

amazingNumbers(999)