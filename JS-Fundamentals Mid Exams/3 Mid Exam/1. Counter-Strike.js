// every 3rd won battle increase the energy with the current count of won battles
// 

function counterStrike(input) {

    let initialEnergy = input.shift()
    let command = input.shift();
    let battleCount = 0;
    let wonBattles = 0;

    while (command != 'End of battle') {
        initialEnergy -= Number(command);
        if (initialEnergy <= 0) {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and 0 energy`);
            break;
        } else {
            wonBattles++;
        }
        battleCount++
        if (battleCount == 3) {
            initialEnergy += battleCount;
            battleCount = 0;
        }
        command = input.shift();
    }
    if (command == 'End of battle') {
        console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);
    }
}

counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
)
counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
)