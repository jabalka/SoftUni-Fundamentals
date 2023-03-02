function specialNumbers(number){

        
    
    let currentNumber = 0;
    
    for(let n = 1; n <= number; n++){
        let sum = 0; 

        currentNumber = n.toString();
        for(let x = 0; x < currentNumber.length; x++){
            let num = currentNumber[x]
            sum += +num;
 
        }
        if(sum == 5 || sum == 7 || sum == 11){
            console.log(`${n} -> True`);
        } else {
            console.log(`${n} -> False`);
        }
    }
    console.log(`**********END*********`);
}

specialNumbers(15);

specialNumbers(23);