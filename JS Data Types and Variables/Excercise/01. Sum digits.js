function sumNums(number){

    let char = number.toString();
    let sum = 0;
    for (let i = 0; i < char.length; i++){

        let digit = char[i];
        sum += +digit;  
    }
    console.log(sum);
}

sumNums(245678)
sumNums(97561)
sumNums(543)