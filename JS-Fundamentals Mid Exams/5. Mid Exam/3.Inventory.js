function inventoryProb(input) {

    let journalLine = input.shift().split(', ');

    for (let element of input) {
        let [command, item] = element.split(' - ');

        if (command == 'Collect') {
            if (!journalLine.includes(item)) {
                journalLine.push(item)
            }
        } else if (command == 'Drop') {
            if (journalLine.includes(item)) {
                let index = journalLine.indexOf(item);
                journalLine.splice(index, 1);
            }
        } else if (command == 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            if (journalLine.includes(oldItem)) {
                let index = journalLine.indexOf(oldItem);
                journalLine.splice(index + 1, 0, newItem);
            }
        } else if (command == 'Renew') {
            if (journalLine.includes(item)) {
                let index = journalLine.indexOf(item);
                journalLine.splice(index, 1);
                journalLine.push(item);
            }
        } else {
            console.log(`${journalLine.join(', ')}`);
        }
    }
}

inventoryProb(['Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]
)
inventoryProb([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
)