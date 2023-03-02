function censoredWords(text, word) {

    let censored = text.replace(word, repeat(word))
    while (censored.includes(word)) {
        let censored = censored.replace(word, repeat(word))
    }

    function repeat(a){
        return '*'.repeat(a.length)
    }
    console.log(censored)
}

censoredWords("A small sentence with some words", "small")