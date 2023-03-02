function postOffice(input) {

    let regexFirst = /([\#\$\%\*\&])[A-Z]{1,}\1/g;
    let regexSecond = /(?<codeLetter>[0-9]{2}):(?<lengthWord>[0-9]{2})/g;

    let [capitalLetters, startingCodes, message] = input.split('|');
    let startingLetters = capitalLetters.match(regexFirst).shift().slice(1, -1).split('')
    let asciiCodeLength = startingCodes.match(regexSecond);
    message.split(' ').forEach(word => {
        for (let each of asciiCodeLength) {
            let [ascii, length] = each.split(':');
            [ascii, length] = [Number(ascii), Number(length)];
            let capLetter = String.fromCharCode(ascii);
            if(startingLetters.includes(capLetter) 
            && capLetter === word[0] 
            && word.length - 1 === length){
                console.log(word)
                break;
            }
        }
    })
    console.log(`************************`)
}

postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos')
postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig')