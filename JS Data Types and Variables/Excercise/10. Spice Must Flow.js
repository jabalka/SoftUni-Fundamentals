function spiceMustFlow(input){

    let startingYield = +input;
    let wordersConsumtion = 26;
    let totalExctraction = 0;

    let dayCount = 0;

    while(startingYield > 100){
        let dayExctraction = 0;
        dayCount++;
        dayExctraction += startingYield - wordersConsumtion;
        startingYield -= 10;
        totalExctraction += dayExctraction
    }
    totalExctraction -= wordersConsumtion;

    console.log(dayCount);
    console.log(totalExctraction);
}

spiceMustFlow(111)