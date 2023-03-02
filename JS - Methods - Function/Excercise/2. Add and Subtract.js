function addSubtract(num1, num2, num3){
    var result_sum;
    var result_subtract;
    sum();
    subtract();


    function sum(){
        result_sum = num1 + num2;
    }
    function subtract(){
        result_subtract = result_sum - num3;
    }
    console.log(result_subtract);
}

addSubtract(23,
    6,
    10
    )
addSubtract(1,
    17,
    30
    )
addSubtract(42,
    58,
    100
    )