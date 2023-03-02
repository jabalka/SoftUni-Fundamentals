function rightPlace(arg1, arg2, arg3) {

    let firstWord = arg1;
    let missingChar = arg2;
    let secondWord = arg3;

    let newWord = firstWord.replace('_', missingChar);
    // Ternar Operator as a value in variable
    // instead of if(newWord == secondWord){ output = Matched} etc.
    let output = newWord === secondWord ? "Matched" : "Not Matched";

    console.log(output);

}

rightPlace('Str_ng', 'I', 'Strong')

rightPlace('Str_ng', 'i', 'String')