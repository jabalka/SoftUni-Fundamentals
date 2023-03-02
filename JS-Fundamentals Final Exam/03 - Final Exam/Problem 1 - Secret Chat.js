function secretChat(input) {

    let message = input.shift();
    let newMessage = message;
    let commands = {
        InsertSpace: (message, [index]) => {
            index = Number(index);
            newMessage = message.substring(0, index) + ` ` + message.substring(index);
            console.log(newMessage)
        },
        Reverse: (message, [substring]) => {
            if (message.includes(substring)) {
                let index = message.indexOf(substring);
                let str = message.substring(index, index + substring.length).split('').reverse().join('');
                newMessage = message.substring(0, index) + str + message.substring(index + substring.length);
                console.log(newMessage);
            } else {
                console.log(`error`);
            }
        },
        ChangeAll: (message, [substring, replacement]) => {
            newMessage = message.replaceAll(substring, replacement);
            console.log(newMessage);
        }
    };

    while (input[0] !== 'Reveal') {
        let [cmd, ...arg] = input.shift().split(':|:');
        let command = commands[cmd];
        command(newMessage, arg);
    }
    console.log(`You have a new text message: ${newMessage}`);
}

secretChat(['heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'])

secretChat(['Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])