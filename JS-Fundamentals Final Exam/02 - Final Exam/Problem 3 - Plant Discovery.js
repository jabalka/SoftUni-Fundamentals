function plantDiscovery(input) {

    let commands = {
        Rate: (plants, [plantName, currentRating]) => {
            currentRating = Number(currentRating);
            plants[plantName].rating.push(currentRating);
        },
        Update: (plants, [plantName, newRarity]) => {
            newRarity = Number(newRarity);
            plants[plantName].rarity = newRarity;
        },
        Reset: (plants, [plantName]) => {
            while (plants[plantName].rating.length != 0) {
                plants[plantName].rating.pop();
            }
        }
    }

    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->');
        plants[plant] = {
            rarity: Number(rarity),
            rating: []
        }
    }

    while (input[0] != 'Exhibition') {
        let [commandName, ...arg] = input.shift().split(': ').join(', ').split(' - ').join(', ').split(', ');
        let command = commands[commandName];
        command(plants, arg);
    }
    console.log(`Plants for exhibition:`);

    Object.entries(plants).sort(([a, { rarityA, ratingA }], [b, { rarityB, ratingB }]) => {
        a.localeCompare(b) && ratingA - ratingB;
    })
        .forEach(([plant, { rarity, rating }]) => {
            let ratCount = rating.length;
            if (ratCount != 0) {
                let avrgRating = 0;
                rating.forEach(each => avrgRating += each);
                rating = avrgRating / ratCount;
            } else {
                rating = 0;
            }
            console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${rating.toFixed(2)}`);
        })
    // alternative of compared arrow function-------------------------
    // function compare(a, b) {
    //     let plantA = a[1];
    //     let plantB = b[1];
    //     let result = '';
    //     if (plantA.rarity - plantB.rarity == 0){
    //         result = plantA.rate - plantB.rate;
    //     } else if (plantA.rate - plantB.rate == 0) {
    //         result = plantA.rarity - plantB.rarity;
    //     } else {
    //         result = a[0].localeCompare(b[0]);
    //     }

    //     return result
    // }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
