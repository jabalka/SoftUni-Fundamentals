
// until receive 'end' !
// strings with 2 integers representing the indexes of elements in sequence
// add 2 matching elements in the middle
// of sequence if enters same indexes or out of bounds "-{number of moves until now}a" 

function memoryGame(input) {

    let sequenceNum = input.shift().split(' ');
    let command = input.shift().split(' ');
    let numbMoves = 0;

    while (command != 'end') {
        numbMoves++;
        let [firstInd, secInd] = command;
        let firstDig = sequenceNum[firstInd];
        let secDig = sequenceNum[secInd];
        if (firstDig === secDig) {
            console.log(`Congrats! You have found matching elements - ${firstDig}!`);
            if (Number(firstInd) > Number(secInd)) {
                sequenceNum.splice(Number(firstInd), 1);
                sequenceNum.splice(Number(secInd), 1);
            } else {
                sequenceNum.splice(Number(secInd), 1);
                sequenceNum.splice(Number(firstInd), 1);
            }
        }
        if (firstInd == secInd || firstDig == undefined || secDig == undefined) {
            let newElement = `-${numbMoves}a`
            sequenceNum.splice(sequenceNum.length / 2, 0, newElement, newElement)
            console.log(`Invalid input! Adding additional elements to the board`);
        } else if (firstDig != secDig) {
            console.log(`Try again!`);
        }

        if (sequenceNum.length == 0) {
            console.log(`You have won in ${numbMoves} turns!`);
            break;
        }
        command = input.shift().split(' ');
    }
    if (command == 'end' && sequenceNum.length != 0) {
        console.log(`Sorry you lose :(\n${sequenceNum.join(' ')}`);
    }
    console.log(`********END********`);
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)