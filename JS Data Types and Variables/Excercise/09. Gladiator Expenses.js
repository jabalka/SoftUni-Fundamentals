function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {


    let shieldBreak = 0;
    let currentPrice = 0;

    for (let fights = 1; fights <= lostFights; fights++) {
        if (fights % 2 == 0) {
            currentPrice += helmetPrice;
        }
        if (fights % 3 == 0) {
            currentPrice += swordPrice;
        }
        if (fights % 2 == 0 && fights % 3 == 0) {
            currentPrice += shieldPrice;
            shieldBreak++;
        }
        if (shieldBreak == 2) {
            currentPrice += armorPrice;
            shieldBreak = 0;
        }
    }
    console.log(`Gladiator expenses: ${currentPrice.toFixed(2)} aureus`)
}

gladiatorExpenses(7,
    2,
    3,
    4,
    5
)

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
)