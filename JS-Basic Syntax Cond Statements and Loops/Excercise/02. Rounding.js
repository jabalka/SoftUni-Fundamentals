function roundingNumbers(arg1, arg2){

    let number = +arg1;
    let toFixed = +arg2

    console.log(parseFloat(number.toFixed(toFixed)));
}

roundingNumbers(3.1415926535897932384626433832795,2)

roundingNumbers(10.5,3)