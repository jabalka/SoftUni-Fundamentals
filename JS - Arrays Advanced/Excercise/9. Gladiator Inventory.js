function gladiatorInv(commands) {


    let inventory = Array.from(commands.shift().split(' '));
    let index = 0;

    for (let element of commands) {

        let splitCommand = element.split(' ');
        let command = splitCommand[0];
        let equipment = splitCommand[1];
        switch (command) {
            case 'Buy':
                !inventory.includes(equipment)
                    ? inventory.push(equipment)
                    : 0; break;
            case 'Trash':
                index = inventory.indexOf(equipment);
                inventory.includes(equipment)
                    ? inventory.splice(index, 1)
                    : 0; break;
            case 'Repair':
                if(inventory.includes(equipment)){
                    let current = inventory.splice(inventory.indexOf(equipment), 1);
                    inventory.push(current[0]);
                }; break;
            case 'Upgrade':
                let splitEqu = equipment.split('-');
                equipment = splitEqu[0];
                let upgrade = splitEqu[1];
                if(inventory.includes(equipment)){
                    let elementToAdd = `${equipment}:${upgrade}`
                    index = inventory.indexOf(equipment);
                    inventory.splice(index + 1, 0, elementToAdd);
                }; break;
            
        }
    }
    return console.log(inventory.join(' '));
}

gladiatorInv(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)
gladiatorInv(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)