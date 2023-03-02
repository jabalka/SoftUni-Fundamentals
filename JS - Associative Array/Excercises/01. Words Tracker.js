function wordsTracker(input) {

    let book = {};
    let wordsGiven = input.shift().split(' ');
    wordsGiven.forEach((word) => book[word] = 0);

    input.forEach((word) => {
        if (book.hasOwnProperty(word)) {
            book[word] += 1;
        }
    })
    Object.entries(book).sort(([wordA, countA], [wordB, countB]) => countB - countA)
        .forEach(([word, count]) => console.log(`${word} - ${count}`));
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])