function pascalCaseSplitter(str) {

    let words = [];
    let index = 0;

    for (let i = 1; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            let word = str.substring(index, i);
            words.push(word)
            index = i;
        } else if (i == str.length - 1) {
            let word = str.substring(index);
            words.push(word)
        }
    }
    console.log(words.join(', '))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')