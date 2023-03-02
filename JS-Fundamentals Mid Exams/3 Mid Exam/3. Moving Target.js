// first line sequence of targets with their values
// then receiving commands until "End"
// s



function movingTarget(input) {

    let targets = input.shift().split(' ').map(Number);
    let mainCommand = input.shift();

    while (mainCommand != "End") {
        let [command, index, value] = mainCommand.split(' ');
        index = Number(index);
        value = Number(value);

        if (command == 'Shoot' && !(index < 0 || index > targets.length - 1)) {
            targets[index] -= value;
            if (targets[index] <= 0) {
                targets.splice(index, 1);
            }
        } else if (command == 'Add') {
            if (!(index < 0 || index > targets.length - 1)) {
                targets.splice(index, 0, value); 
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (command == 'Strike' && !(index < 0 || index > targets.length - 1)) { // else below might need to be applied here*!
            if ((index + value) <= (targets.length - 1) && (index - value) >= 0) {
                targets.splice((index - value), ((value * 2) + 1));
            } else {
                console.log(`Strike missed!`);
            }
        }
        mainCommand = input.shift();
    }
    console.log(`${targets.join('|')}`)
}

movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
)
movingTarget((["1 2 3 4 5",
    "Strike 0 1",
    "End"])
)