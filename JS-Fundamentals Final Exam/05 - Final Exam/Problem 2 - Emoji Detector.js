function emojiDetector(input) {

    const line = input.shift();
    const regexNumbers = /\d/g;
    const regexEmoji = /([::|**]{2})(?<name>[A-Z][a-z]{2,})\1/g;
    let coolEmoji = {};

    let coolThreshold = line.match(regexNumbers).map(Number).reduce((a, b) => a * b)
    let emojis = line.match(regexEmoji);
    emojis.forEach(emoji => {
        let clearEmo = emoji.split(emoji[0]).filter(a => a.length > 0).shift();
        let coolnessEmo = 0;
        for (let char of clearEmo) {
            coolnessEmo += char.charCodeAt();
        }
        coolEmoji[emoji] = coolnessEmo;
    })

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    Object.entries(coolEmoji)
        .filter(([emoji, coolness]) => coolness > coolThreshold)
        .forEach(([emojiName, coolness]) => console.log(emojiName))




}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);