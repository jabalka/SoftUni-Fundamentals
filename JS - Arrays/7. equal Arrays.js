function equalArrays(array1, array2){

    let sum = 0;
    let isDifferent = false;

    for(let i = 0; i < array1.length; i++){
        if(isDifferent){
            break;
        }
        let number1 = Number(array1[i]);

        for(let e = i; e <= i; e++){
            
            let number2 = Number(array2[i])
            if(number1 == number2){
                sum += number1
            } else if(number1 != number2){
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                isDifferent = true;
                break;
            }
        }
    }
    if(!isDifferent){
    console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);