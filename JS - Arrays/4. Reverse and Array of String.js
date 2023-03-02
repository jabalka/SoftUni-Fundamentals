function reverseArrayOfString(array){

    let lastIndex = array.length - 1;

    for(let i = 0; i < array.length / 2; i++){

        let temp = array[i];

        array[i] = array[lastIndex - i];

        array[lastIndex - i] = temp;
    }

    console.log(array.join(" "));
}

reverseArrayOfString(['a', 'b', 'c', 'd', 'e']);

reverseArrayOfString(['abc', 'def', 'hig', 'klm', 'nop']);

reverseArrayOfString(['33', '123', '0', 'dd']);