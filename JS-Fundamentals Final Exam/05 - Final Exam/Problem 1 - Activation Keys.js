function activationKeys(input) {

    let rawKey = input.shift();
    let newStr = rawKey;
    let commands = {
        Contains: (rawKey, [substring]) => {
            if (rawKey.includes(substring)) {
                console.log(rawKey);
            } else {
                console.log(`Substring not found!`);
            }
        },
        Flip: (rawKey, [direction, startIndex, endIndex]) => {
            [startIndex, endIndex] = [Number(startIndex), Number(endIndex)];
            if (direction == 'Lower') {
                let lowerCase = rawKey.substring(startIndex, endIndex).toLowerCase();
                newStr = rawKey.substring(0, startIndex) + lowerCase + rawKey.substring(endIndex);
            } else {
                let upperCase = rawKey.substring(startIndex, endIndex).toUpperCase();
                newStr = rawKey.substring(0, startIndex) + upperCase + rawKey.substring(endIndex);
            } console.log(newStr);
        },
        Slice: (rawKey, [startIndex, endIndex]) => {
            [startIndex, endIndex] = [Number(startIndex), Number(endIndex)];
            newStr = rawKey.slice(0, startIndex) + rawKey.slice(endIndex);
            console.log(newStr);
        }
    };

    while (input[0] != 'Generate') {
        let [cmd, ...args] = input.shift().split('>>>');
        let command = commands[cmd];
        command(newStr, args);
    }
    console.log(`Your activation key is: ${newStr}`);

    console.log(`**************************`)
}
activationKeys(['abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
])

activationKeys(['134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
])

