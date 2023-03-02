function stringSubstring(wordGiven, str){

    str = str.toLowerCase().split(' ');
    let isFound = false;
    
    for(let word of str){
        if(word === wordGiven.toLowerCase()){
            isFound = true;
            break;
        } 
    }
    if(isFound){
        console.log(wordGiven)
    } else {
        console.log(`${wordGiven} not found!`)
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language'
)

stringSubstring('python',
'JavaScript is the best programming language'
)