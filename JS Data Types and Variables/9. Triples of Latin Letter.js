function latinLetters(number){


    for(let fLetter = 0; fLetter < number; fLetter++){

        for(let sLetter = 0; sLetter < number; sLetter++){

            for( let tLetter = 0; tLetter < number; tLetter++){

                let firstLetter = String.fromCharCode(97 + fLetter);
                let secondLetter = String.fromCharCode(97 + sLetter);
                let thirdLetter = String.fromCharCode(97 + tLetter);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

latinLetters(3)