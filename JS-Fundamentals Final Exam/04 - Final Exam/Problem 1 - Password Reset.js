function passwordReset(input) {

    let str = input.shift();
    let command = input.shift();
    let currentsStr = [];

    while (command !== 'Done') {
        if (command.includes('TakeOdd')) {
            for (let i = 1; i < str.length; i += 2) {
                currentsStr.push(str[i])
            }
            currentsStr = currentsStr.join('')
            console.log(currentsStr)
        } else if (command.includes('Cut')) {
            let [commandName, index, length] = command.split(' ');
            let first = currentsStr.slice(0, +index);
            let sec = currentsStr.slice(+index + +length);
            currentsStr = first + sec;
            console.log(currentsStr);
        } else if (command.includes('Substitute')) {
            let [commandName, substring, substitute] = command.split(' ');;
            if (currentsStr.includes(substring)) {
                currentsStr = currentsStr.replaceAll(substring, substitute);
                console.log(currentsStr)
            } else {
                console.log(`Nothing to replace!`);
            }
        }
        command = input.shift();
    }
    console.log(`Your password is: ${currentsStr}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
