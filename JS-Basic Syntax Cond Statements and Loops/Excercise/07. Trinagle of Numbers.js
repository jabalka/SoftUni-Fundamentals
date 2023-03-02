function triangleOfNumbers(arg){    

    let number = +arg;
    
    for (let x = 1; x <= number; x++){
        let outprint = "";
        for (let y = 1; y <= x; y++){
            outprint += x + ' ';
        }
        console.log(outprint);
    }
}

triangleOfNumbers(3)

triangleOfNumbers(5)

triangleOfNumbers(6)