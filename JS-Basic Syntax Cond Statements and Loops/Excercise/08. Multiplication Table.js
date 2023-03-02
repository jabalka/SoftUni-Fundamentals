function multiplicationTable(arg){

    let number = +arg;
    let result = 0;

    for (let x = 1; x <= 10; x++){
        result = number * x;
        console.log(`${number} X ${x} = ${result}`);
    }
    console.log(`********END*******`);
}

multiplicationTable(5)
multiplicationTable(2)