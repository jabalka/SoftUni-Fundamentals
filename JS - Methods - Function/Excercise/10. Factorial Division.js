function factorialDivision(num1, num2){

    let factorialNum1 = 1;
    let factorialNum2 = 1;
    let result = 0;

    for(let i= 1; i <= num1; i++){
        factorialNum1 *= i;  
    }
    for(let i= 1; i <= num2; i++){
        factorialNum2 *= i;  
    }
    result = factorialNum1 / factorialNum2;
    console.log(result.toFixed(2));

}

factorialDivision(5, 2)
factorialDivision(6, 2)