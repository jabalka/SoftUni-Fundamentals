function wordOccurence(input) {

    let wordObj = new Map();
    let count = 1;

    for (let eachWord of input) {

        if (!wordObj.has(eachWord)) {
            wordObj.set(eachWord, count);
        } else {
            let currCount = wordObj.get(eachWord);
            let newCount = currCount + 1
            wordObj.set(eachWord, newCount);
        }
    }

    let sorted = Array.from(wordObj).sort(([wordA, countA], [wordB, countB]) => countB - countA);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`)
    }

}

wordOccurence(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"])