function starEnigma(input) {

    const regexDecrypted = /([^\@\-\!\:\>]+)?@(?<planet>[A-Za-z]+)([^\@\-\!\:\>]+)?:(?<population>[\d]+)([^\@\-\!\:\>]+)?!(?<attackType>[AD])!([^\@\-\!\:\>]+)?->(?<soldiers>[\d]+)([^\@\-\!\:\>]+)?/g;
    const numberMessages = Number(input.shift());
    const regexDecrKey = /[starSTAR]/g;
    let attackedPlanets = {};
    let destroyedPlanets = {};

    for (const line of input) {
        let decrKey = line.match(regexDecrKey).length;
        let decryptedString = '';
        for (const char of line) {
            let newCode = char.charCodeAt() - decrKey;
            let newChar = String.fromCharCode(newCode);
            decryptedString += newChar;
        };
        if (decryptedString.match(regexDecrypted)) {
            let currentPlanet = regexDecrypted.exec(decryptedString);
            if (currentPlanet.groups.attackType == 'A') {
                attackedPlanets[currentPlanet.groups.planet] = +currentPlanet.groups.population;
            } else {
                destroyedPlanets[currentPlanet.groups.planet] = +currentPlanet.groups.population;
            }
        }
    };
    let counter = 0;
    Object.keys(attackedPlanets).forEach(planet => counter++);
    console.log(`Attacked planets: ${counter}`);
    let attackedOrdered = Object.keys(attackedPlanets)
        .sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));
    counter = 0;
    Object.keys(destroyedPlanets).forEach(planet => counter++);
    console.log(`Destroyed planets: ${counter}`);
    let destroyedOrdered = Object.keys(destroyedPlanets)
        .sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
starEnigma(['3',
    `tt(''DGsvywgerx>6444444444%H%1B9444`,
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);