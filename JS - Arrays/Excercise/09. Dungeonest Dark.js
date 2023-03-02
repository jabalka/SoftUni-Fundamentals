function dungeonest(array) {

    // let str = array.toString(); --- no need of this if used below technique
    let rooms = array[0].split('|');

    let initialCoins = 0;
    let currentHealth = 100;
    let isDead = false;
    let roomCount = 0;

    for (let i = 0; i < rooms.length; i++) {
        if (isDead) {
            break; 
        }
        roomCount++;
        let [monster, monsterPoints] = rooms[i].split(' ');

        function dead() {
            currentHealth -= +monsterPoints
            if (currentHealth > 0) {
                isDead = false;
                console.log(`You slayed ${monster}.`);
            } else {
                isDead = true;
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomCount}`)
            }
        }
        switch (monster) {
            case 'potion':
                if (currentHealth + +monsterPoints >= 100) {
                    console.log(`"You healed for ${100 - currentHealth} hp."`);
                    currentHealth = 100;
                    console.log(`Current health: ${currentHealth} hp.`);
                } else if (currentHealth + +monsterPoints < 100) {
                    currentHealth += +monsterPoints;
                    console.log(`You healed for ${monsterPoints} hp.`);
                    console.log(`Current health: ${currentHealth} hp.`);
                }; break;
            case 'chest': initialCoins += +monsterPoints;
                console.log(`You found ${monsterPoints} coins.`);
                break;
            case 'cat':
            case 'orc':
            case 'snake':
            case 'rat':
            case 'bat':
            case 'boss': dead();
                break;
        }
    }
    if (!isDead) {
        console.log(`You've made it!"\n"Coins: ${initialCoins}"\n"Health: ${currentHealth}`)
    }
    console.log(`********GAME OVER********`)
}
dungeonest(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])


dungeonest(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])