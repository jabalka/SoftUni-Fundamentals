function treasureHunt(input) {

    let initialLoot = input.shift().split('|');
    let mainCommand = input.shift();

    while (mainCommand != 'Yohoho!') {
        let command = mainCommand.split(' ').shift();
        if (command == 'Loot') {
            let cmd = mainCommand.split(' ');
            for (let i = 1; i < cmd.length; i++) {
                items(initialLoot, cmd[i]);
            }
        } else if (command == 'Drop') {
            let [cmd, index] = mainCommand.split(' ');
            let currentItem = initialLoot[index];
            if (!(index < 0 || index > initialLoot.length - 1)) {
                initialLoot.splice(index, 1);
                initialLoot.push(currentItem);
            }
        } else {
            let [cmd, count] = mainCommand.split(' ');
            let stolenItems = [];
            if (count >= initialLoot.length) {
                stolenItems = initialLoot.splice(0);
            } else {
                stolenItems = initialLoot.splice(-count);
            }
            console.log(stolenItems.join(', '));
        }
        mainCommand = input.shift();
    }
    let allLoopsLengths = 0;
    initialLoot.forEach((element) => allLoopsLengths += element.length)
    let avrgGain = allLoopsLengths / initialLoot.length;
    if (initialLoot.length > 0) {
        console.log(`Average treasure gain: ${avrgGain.toFixed(2)} pirate credits.`)
    } else {
        console.log(`Failed treasure hunt.`);
    }
}
function items(x, y) {
    if (!x.includes(y)) {
        x.unshift(y);
    }
    return x;
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);
