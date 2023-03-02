function modernTimes(str) {

    str = str.split(' ');
    let isValid = true;

    str.forEach((word) => {
        if (word[0] == '#' && word.length > 1) {
            word = word.substring(1)
            for (let char of word) {
                if (char.charCodeAt() < 65 && char.charCodeAt() > 90
                    || char.charCodeAt() < 97 && char.charCodeAt() > 122) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                console.log(word)
            }
        }
    })
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')