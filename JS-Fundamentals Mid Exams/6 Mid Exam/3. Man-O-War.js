function man_O_war(input) {

    let shipStatus = input.shift().split('>').map(Number);
    let warshipStatus = input.shift().split('>').map(Number);

    let maxSectionHealth = Number(input.shift());

    let won = false;
    let lost = false
    let mainCommand = input.shift().split(' ');

    while (!mainCommand.includes('Retire')) {
        let command = mainCommand[0];
        if (command == 'Fire') {
            let [cmd, index, damage] = mainCommand.map(Number);
            if (index >= 0 && index < (warshipStatus.length)) {
                warshipStatus[index] -= damage;
                if (warshipStatus[index] <= 0) {
                    won = true;
                }
            }
        } else if (command == 'Defend') {
            let [cmd, startIndex, endIndex, damage] = mainCommand.map(Number);
            if ((startIndex >= 0 && startIndex < shipStatus.length)
                && (endIndex >= 0 && endIndex < shipStatus.length)) {
                for (let i = startIndex; i <= endIndex; i++) {
                    shipStatus[i] -= damage;
                    if (shipStatus[i] <= 0) {
                        lost = true;
                    }
                }
            }
        } else if (command == 'Repair') {
            let [cmd, index, health] = mainCommand.map(Number);
            if (index >= 0 && index < shipStatus.length) {
                shipStatus[index] += health;
                if (shipStatus[index] > maxSectionHealth) {
                    shipStatus[index] = maxSectionHealth;
                }
            }
        } else {
            let countSection = 0;
            shipStatus.forEach((x) => x < (maxSectionHealth * 0.2) ? countSection++ : countSection);
            console.log(`${countSection} sections need repair.\n`);
        }


        if (won) {
            console.log(`You won! The enemy ship has sunken.\n`);
            break;
        } else if (lost) {
            console.log(`You lost! The pirate ship has sunken.\n`);
            break;
        }
        mainCommand = input.shift().split(' ');
    }
    if (!won && !lost) {
        console.log(`Pirate ship status: ${shipStatus.reduce((a, b) => a + b)}
\nWarship status: ${warshipStatus.reduce((a, b) => a + b)}
        `)
    }



}

man_O_war(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

man_O_war(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);
