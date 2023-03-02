function calculator(firstNum, operator, secondNum){

    // The eval() function takes a string and then returns 
    // the value of that string considered as a math operation.
    let result = eval(firstNum + operator + secondNum);

    console.log(result.toFixed(2));

}

calculator(5,
    '+',
    10
    )

calculator(25.5,
    '-',
    3
    )