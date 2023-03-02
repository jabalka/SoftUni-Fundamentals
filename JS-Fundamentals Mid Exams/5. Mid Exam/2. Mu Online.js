function muOnline(input) {

    let initialHealth = 100;
    let bitcoins = 0;
    let roomsLine = input.split('|');
    let roomCount = 0;
    let isDead = false;

    for (let element of roomsLine) {
        roomCount++;
        let [command, value] = element.split(' ');
        value = Number(value)
        switch (command) {
            case 'potion':
                if (initialHealth + value > 100) {
                    value = 100 - initialHealth;
                    initialHealth = 100;
                } else {
                    initialHealth += value;
                }
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
                break;
            case 'chest': bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default: initialHealth -= value;
                if (initialHealth > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCount}`);
                    isDead = true;
                }
        }
        if (isDead) {
            break;
        }
    }
    if (roomCount == roomsLine.length) {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${initialHealth}`);
    }
    console.log(`******END******`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");