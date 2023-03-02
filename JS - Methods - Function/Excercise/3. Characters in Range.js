function charsInRange(char1, char2) {

    let numChar1 = 0;
    let numChar2 = 0;
    let result = [];

    for (let i = 32; i <= 127; i++) {
        var c = i; 
        let curChar = String.fromCharCode(i);
        if(char1 === curChar){
            numChar1 = c;
        } for (let r = 32; r <= 127; r++){
            let v = r;
            let curChar2 = String.fromCharCode(r);
            if(char2 === curChar2){
                numChar2 = v;
                continue;
            }
        }
    }
    if(numChar1 < numChar2){
        for (let i = numChar1 + 1; i < numChar2; i++){
            let curChar = String.fromCharCode(i);
            result.push(curChar);
        }
    } else if(numChar2 < numChar1){
        for (let i = numChar2 + 1; i < numChar1; i++){
            let curChar = String.fromCharCode(i);
            result.push(curChar);
        }
    }
    console.log(result.join(' '));
}

charsInRange('a',
'd'
)

charsInRange('#',
':'
)

charsInRange('C',
'#'
)

/// or with simplier way -------------------
function charInRange(a, b){

    let firstCode = a.charCodeAt(0);
    let secondCode = b.charCodeAt(0);
    let start = firstCode < secondCode ? firstCode : secondCode; // Math.min(firstCode, secondCode)
    let end = firstCode > secondCode ? firstCode : secondCode;  // Math.max(firstCode, secondCode)
    let line = '';
    for(let i = start + 1; i < end; i++){
        line += String.fromCharCode(i) + ' ';
    }
    return line;
}

console.log(charInRange('a',
'd'));
console.log(charInRange('#',
':'));
console.log(charInRange('C',
'#'));