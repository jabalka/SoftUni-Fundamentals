function netherRealm(input) {

    let regexHealth = /([^\d\+\-\*\/\.])/g;
    let regexDamage = /[-+]?\d\.?\d?/g;
    let alterDamageRegex = /[\*\/]+/g;
    let persons = input.split(', ');
    let people = {};
    for (let each of persons) {
        let healthStr = each.match(regexHealth);
        let healthPoints = 0;
        for (const char of healthStr) {
            healthPoints += char.charCodeAt();
        }
        let damage = each.match(regexDamage)//.map(Number).reduce((a, b) => a+b);
        let totalDamage = 0;
        if (damage !== null) {
            for (let number of damage) {
                totalDamage += Number(number);
            }
            let alterDamage = each.match(alterDamageRegex).join('').split('');
            for (let each of alterDamage) {
                if (each == "/") {
                    totalDamage /= 2;
                } else {
                    totalDamage *= 2;
                }
            }
        }
        people[each] = {
            health: healthPoints,
            damage: totalDamage
        }
    }
    let sorted = Object.entries(people).sort((a, b) => {
        let [nameA, ...argA] = a;
        let [nameB, ...argB] = b;
        return nameA.localeCompare(nameB)
    }).forEach(person => {
        let name = person[0];
        let [health, damage] = Object.values(person[1])
        console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`)
    })
}

netherRealm('M3ph-0.5s-0.5t0.0**');
netherRealm('M3ph1st0**, Azazel');
netherRealm('Gos/ho');