function heroesOfCoded(input) {

    let actions = {
        CastSpell: (heroes, [name, mpCost, spell]) => {
            let hero = heroes[name];
            mpCost = Number(mpCost);
            if (hero.mp >= mpCost) {
                hero.mp -= mpCost
                console.log(`${name} has successfully cast ${spell} and now has ${hero.mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }

        },
        TakeDamage: (heroes, [name, damage, attacker]) => {
            let hero = heroes[name];
            damage = Number(damage);
            hero.hp -= damage;
            if (hero.hp > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
            }
        },
        Recharge: (heroes, [name, mp]) => {
            let hero = heroes[name];
            mp = Number(mp);
            if (hero.mp + mp >= 200) {
                console.log(`${name} recharged for ${200 - hero.mp} MP!"`)
                hero.mp = 200;
            } else {
                hero.mp += mp;
                console.log(`${name} recharged for ${mp} MP!"`)
            }

        },
        Heal: (heroes, [name, hp]) => {
            let hero = heroes[name];
            hp = Number(hp);
            if (hero.hp + hp > 100) {
                console.log(`${name} healed for ${100 - hero.hp} HP!"`);
                hero.hp = 100;
            } else {
                hero.hp += hp
                console.log(`${name} healed for ${hp} HP!"`);
            }
        }

    }

    let heroes = {};
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        heroes[name] = {
            hp: Number(hp),
            mp: Number(mp)
        }
    }

    while (input[0] !== 'End') {
        let [command, ...args] = input.shift().split(' - ');
        let action = actions[command];
        action(heroes, args);
    }

    Object.entries(heroes).filter(([hero, { hp, mp }]) => hp > 0)
        .sort(compareLocale)
        .forEach(([hero, { hp, mp }]) => {
            console.log(`${hero}\n HP: ${hp}\n MP: ${mp}`);
        })

    function compareLocale(a, b) {
        let heroA = a[1];
        let heroB = b[1];
        let result = heroB.hp - heroA.hp;
        if (result == 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;
    }
    console.log(`******************************`)


}

// heroesOfCoded(['2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'])
heroesOfCoded(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])