function perfectNumber(num){

    let sum = 0;
    let i = 0;
    while(num > sum){
        i++;
        if(num % i == 0){
            sum += i;
        }
    }
    if(sum === num){
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber(6);

perfectNumber(28);

perfectNumber(1236498);