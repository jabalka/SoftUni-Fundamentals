function santaHelper(input) {

    const regexName = /@(?<name>[A-Z][a-z]+)/g;
    const regexBehaviour = /![GN]!/g;
    const key = Number(input.shift());
    let goodKids = {};

    while (input[0] !== 'end') {
        let line = input.shift();
        let newString = "";
        for (char of line) {
            let newChar = String.fromCharCode(char.charCodeAt() - key);
            newString += newChar;
        }
        let name = newString.match(regexName).shift().substring(1);
        let behaviour = newString.match(regexBehaviour).shift().slice(1, -1);
        if (behaviour == 'G') {
            goodKids[name] = '';
        }
    }
    Object.keys(goodKids).sort((a, b) => a.localeCompare(b)).forEach(kid => console.log(kid));
    console.log(`**************************`);
}

santaHelper(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end']);

santaHelper(['3',
    `N}eideidmk$'(mnyenmCNlpamnin$J$`,
    'dddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end']);