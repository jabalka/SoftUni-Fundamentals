function inventory(inputArray){

    let heroes = [];

    inputArray.forEach(line => {
        let [name, level, items] = line.split(' / ');
        heroes.push({
            name,
            level: Number(level),
            items: items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ')
        })
    })

    heroes
        .sort((a, b) => a.level - b.level
            || a.name.localeCompare(b.name))
        .forEach(x => console.log(`Hero:${x.name}\nlevel => ${x.level}\nItems => ${x.items}`));
}

// ---- first approach-----------------
//     let heroes = []

//     for(let line of inputArray){
//         let [name, level, listItems] = line.split(' / ');
//         let items = listItems.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
//         let hero = {
//             name,
//             level: Number(level),
//             items
//         }
//         heroes.push(hero);
//     }
//     heroes.sort((a, b) => 
//         a.level - b.level
//     ).forEach(x => 
//         console.log(`Hero: ${x.name}\nlevel => ${x.level}\nItems => ${x.items}`))
// }

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )