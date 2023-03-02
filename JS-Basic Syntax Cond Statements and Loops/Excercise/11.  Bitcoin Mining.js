function mining(input) {

    let index = 0;
    let amountOfGold = input[index];
    let totalGold = 0;
    let bitcoinPrice = 11949.16;
    let GoldPricePerGram = 67.51;
    let boughtBitcoins = 0;
    let firstDayBought = "";

    let dayCounter = 0;
    let goldToMoney = 0;

    while (index <= input.length - 1) {
        dayCounter++;

        if (dayCounter % 3 == 0) {
            amountOfGold *= 0.70;
        }
        totalGold += amountOfGold;
        goldToMoney += amountOfGold * GoldPricePerGram;

        amountOfGold = +input[++index];

        if (goldToMoney >= bitcoinPrice && boughtBitcoins == 0) {
            firstDayBought += dayCounter;
            boughtBitcoins++;
        }

    }

    boughtBitcoins += Math.trunc((goldToMoney / bitcoinPrice) - 1); // -1 becouse the counter starts since the first day Bought above.
    let totalMoneyLeft = 0;

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBought}`);
        totalMoneyLeft = goldToMoney - (boughtBitcoins * bitcoinPrice); // -bitcoinPrice cuz again the counter above
    } else {
        totalMoneyLeft = goldToMoney;
    }
    console.log(`Left money: ${totalMoneyLeft.toFixed(2)} lv.`);

    console.log(`*******END*******`);

}

mining([100, 200, 300])

mining([50, 100])

mining([3124.15, 504.212, 2511.124])
