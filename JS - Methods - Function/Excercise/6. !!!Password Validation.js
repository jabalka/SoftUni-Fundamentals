function passValidator(pass){
    function isValidLength(pass){
        if (pass.length >= 6 && pass.length <= 10){
            return true;
        } else {
            return 'Password must be between 6 and 10 characters';
        }
    }

    function isValidChars(pass){
        let isValidPass = true;
        for( let i = 0; i < pass.length; i++){            
        let isValid = true;
            
        let code = pass[i].charCodeAt();
            if( code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57){
                    isValid = true;
                } else {
                    isValid = false;
                    isValidPass = false
                    break;
                }

        }
        return isValidPass ? true : 'Password must consist only of letters and digits'
    }

    function atLeastTwoDigits(pass){
      //  code >= 48 && code <= 57
      let digits = 0;
      for( let i = 0; i < pass.length; i++){
        let code = pass[i].charCodeAt();
        if (code >= 48 && code <= 57){
            digits++;
        }
      }
      return digits >= 2 ? true : 'Password must have at least 2 digits';
    }

    let result = [];
    if ( isValidLength(pass) !== true){
        result.push(isValidLength(pass)); 
    }
    if ( isValidChars(pass) !== true){
        result.push(isValidChars(pass));
    }
    if (atLeastTwoDigits(pass) !== true){
        result.push(atLeastTwoDigits(pass));
    } 
    if (isValidLength(pass) === true && isValidChars(pass) === true && atLeastTwoDigits(pass) === true){
        result.push('Password is valid');
    }

    return result.join('\n');
}

console.log(passValidator('logIn'));


// function passwordValidation(string) {

//     let isValid = true;
//     let numbersCount = 0;

//     if (string.length < 6 || string.length > 10) {
//         console.log(`Password must be between 6 and 10 characters`);
//         isValid = false;
//     }
//     for(let i = 0; i < string.length; i++)  {
//         let charDigit = 0;
//         let currentChar = string[i];


//             } else if (charDigit >= 48 && charDigit <= 57 ||
//                 charDigit >= 65 && charDigit <= 90 ||
//                 charDigit >= 97 && charDigit >= 122) {
//                 isValid = true;
//             } else {
//                 console.log(`Password must consist only of letters and digits`);
//                 isValid = false;
//                 break;
//             }
        
//         // if(charDigit < 97 || charDigit > 122){
//         //     if(charDigit < 65 || charDigit > 90){
//         //             if(charDigit < 48 || charDigit > 57){
//         //                 console.log(`Password must consist only of letters and digits`);
//         //                 isValid = false;
//         //             }
//         //         }
//         // }
//         for (let r = 32; r <= 127; r++) {
//             let curChar = String.fromCharCode(r);
//             if (curChar == currentChar) {
//                 charDigit = r;
//                 if (charDigit >= 48 && charDigit <= 57) {
//                     numbersCount++;
//                 }
//                 break;

//     }

//     if (numbersCount < 2) {
//         console.log(`Password must have at least 2 digits`);
//         isValid = false;
//     }
//     if (isValid) {
//         console.log(`Password is valid`);
//     }
//     console.log('*************************');
// }}

// passwordValidation('logIn')
// passwordValidation('MyPass123')
// passwordValidation('Pa$s$s')
