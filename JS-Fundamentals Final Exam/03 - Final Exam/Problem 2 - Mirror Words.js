function mirrorWords(input) {

    let regex = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
    let matches = input.match(regex);
    let words = {
        mirrored: [],
        non_mirrored: []
    };
    if (matches) {
        for (let word of matches) {
            // ------- Instead of this long code is shorter one below:
            // let firstWord= word.substring(1, (word.length / 2) - 1);
            // let secWord = word.substring((word.length / 2) + 1, word.length - 1);
            let [firstWord, secWord] = word.split(word[0]).filter(a => a != '');
            if (firstWord === secWord.split('').reverse().join('')) {
                words.mirrored.push(firstWord + '<=>' + secWord);
            } else {
                words.non_mirrored.push(firstWord + ' - ' + secWord);
            }
        }
    }
    let wordPairs = 0;
    Object.entries(words).forEach(group => { wordPairs += group[1].length })
    let pairs = Array.from(Object.values(words.mirrored)).join(', ');
    if (wordPairs > 0) {
        console.log(`${wordPairs} word pairs found!`);
        if (pairs.length > 0) {
            console.log(`The mirror words are:\n${pairs}`);
        } else {
            console.log(`No mirror words!`);
        }
    } else {
        console.log(`No word pairs found!\nNo mirror words!`);
    }
}

mirrorWords('@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r');

mirrorWords('#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@');

mirrorWords('#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#');