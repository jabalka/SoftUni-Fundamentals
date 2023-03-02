function oddOccurrences(input) {

    input = input.split(' ')
    let words = new Map();
    input.forEach((word) => {
        let wordAny = word.toLowerCase()
        if (!words.has(wordAny)) {
            words.set(wordAny, 0);
        }
        let currentCount = words.get(wordAny);
        words.set(wordAny, currentCount + 1);
    })
    console.log(Array.from(words.keys())
        .filter((x) => words.get(x) % 2 != 0)
        .join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');