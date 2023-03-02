function odd_evenSum(num){

    let numToStr = num.toString();
    var oddSum = 0;
    var evenSum = 0;

    for (let i = 0; i < numToStr.length; i++){

        let currentStr = +numToStr[i];
        if(currentStr % 2 == 0){
            evenSum += currentStr;
        } else{
            oddSum += currentStr;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

odd_evenSum(1000435)
odd_evenSum(3495892137259234)