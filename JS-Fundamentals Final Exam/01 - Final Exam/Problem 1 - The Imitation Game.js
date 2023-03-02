function imitationGame(input) {

    let encryptedMessage = input.shift();
    let newMessage = encryptedMessage;

    let operations = {
        Move: (message, [numberLetter]) => {
            let slicedStr = message.substring(0, numberLetter)
            message = message.substring(numberLetter);
            message += slicedStr;
            newMessage = message;
        },
        Insert: (message, [index, value]) => {
            message = message.substring(0, index) + value + message.substring(index);
            newMessage = message;
        },
        ChangeAll: (message, [substring, replacement]) => {
            message = message.replaceAll(substring, replacement);
            newMessage = message;
        }
    }
    while (input[0] != 'Decode') {
        let [command, ...arg] = input.shift().split('|');
        let operation = operations[command];
        operation(newMessage, arg);
    }
    console.log(`The decrypted message is: ${newMessage}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',]);

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);