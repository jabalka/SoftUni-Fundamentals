function evenAndOddSubtraction(array){

    let sumOdd = 0;
    let sumEven = 0;

    for(let i = 0; i < array.length; i++){

        if(array[i] % 2 == 0){
            sumEven += array[i];
        } else {
            sumOdd += array[i];
        }
    }
    let difference = sumEven - sumOdd;
    console.log(difference);
}

evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);