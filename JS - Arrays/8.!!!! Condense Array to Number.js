function condenseNumbers(array){

    let newArray = new Array();

    // while(array.length > 1){
    //     let i = 0;
    //     let sum = 0;
    //     let firstNum = +array[i];
    //     let secondNum = +array[i+1];
    //     sum = firstNum + secondNum
    //     newArray.push(sum)
    //     array.shift();
    // }

    for(let i = 0; i < array.length; i++){
        let sum = 0;
        let firstNum = +array[0];
        let secondNum = +array[1];
        sum = firstNum + secondNum
        newArray.push(sum)
        array.shift();
    }
    for(let r = 0; r < 1; r++){
        let sum = 0;
        let firstNum = newArray[0];
        let secondNumber = newArray[1];
        sum = +firstNum + + secondNumber;
        newArray.push(sum);
        newArray.shift();
    }

 

  
    console.log(newArray);
}

condenseNumbers([2,10,3]);
condenseNumbers([5,0,4,1,2]);
condenseNumbers([1]);