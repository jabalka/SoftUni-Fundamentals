function lettersChangeNumbers(str) {

    let letters = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    }
    let results = [];
    let tokens = str.split(' ');

    tokens.forEach((token) => {
        token = token.split('')
        let letterOne = token.shift();
        let letterTwo = token.pop();
        token = Number(token.join(''));
        // it is upper case
        if (letterOne.toUpperCase() == letterOne) {
            token /= letters[letterOne.toUpperCase()];
        } else { // it is not upper case
            token *= letters[letterOne.toUpperCase()];
        }
        if (letterTwo.toUpperCase() == letterTwo) {
            token -= letters[letterTwo.toUpperCase()];
        } else {
            token += letters[letterTwo.toUpperCase()];
        }
        results.push(token);
    })
    console.log(results.reduce((a, b) => a + b, 0).toFixed(2));
}

lettersChangeNumbers('A12b s17G')
lettersChangeNumbers('P34562Z q2576f H456z')
lettersChangeNumbers('a1A')