function countOccurrences(text, string) {

    let words = text.split(' ');
    let count = 0;
    for (let word of words) {
        if (word == string) {
            count++
        }
    }
    console.log(count)
}

countOccurrences("This is a word and it also is a sentence",
    "is")