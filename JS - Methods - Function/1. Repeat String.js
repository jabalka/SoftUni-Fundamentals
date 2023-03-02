function repeatString(string, repeatTimes){

    let result = '';
    for(let i = 0; i < repeatTimes; i++){
        result += string;
    }
    console.log(result)

}

repeatString('abc', 3)

repeatString('String', 2)



