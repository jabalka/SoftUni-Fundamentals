function sumEveneNumbers(array){

    let result = 0;

    for(i = 0; i < array.length; i++){
        
        let number = Number(array[i]);

        if(number % 2 == 0){
            result += number;
        }
    }
    console.log(result);
}

sumEveneNumbers(['1','2','3','4','5','6']);
sumEveneNumbers(['3','5','7','9']);
sumEveneNumbers(['2','4','6','8','10']);