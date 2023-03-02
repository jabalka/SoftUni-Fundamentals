function revealW(words, str) {

    words = words.split(', ');
    str = str.split(' ');

    for( let word of words) {
        for(let singleWord of str){
            if(singleWord.includes('*') && singleWord.length == word.length){
                let index = str.indexOf(singleWord)
                str.splice(index, 1, word)
            }
        }
    }
    console.log(str.join(' '))
}

revealW('great',
    'softuni is ***** place for learning new programming languages'
)
revealW('great, learning',
    'softuni is ***** place for ******** new programming languages'
)