// always starts from 1st house index 0 and jumps by given length

// everytime house visited needed hearts decrease by 2

// if house remains with no hearts then print:

// if Cupid jumps on house already with 0 then print:

// if Cupid jumps our of the neighbourhood length he starts again from 0
function heartDelivery(input) {

    let houses = input.shift().split('@').map(Number);
    let mainCommand = input.shift();
    let lastLocation = 0
    // run until "Love" received
    while (!mainCommand.includes("Love!")) {

        let [command, jumpSize] = mainCommand.split(' ');
        lastLocation += Number(jumpSize);
        if (lastLocation > houses.length - 1) {
            lastLocation = 0;
            if (houses[lastLocation] === 0) {
                console.log(`Place ${lastLocation} already had Valentine's day.`);
            } else {
                houses[lastLocation] -= 2;
                if (houses[lastLocation] === 0) {
                    console.log(`Place ${lastLocation} has Valentine's day.`);
                }
            }
        } else {
            if (houses[lastLocation] === 0) {
                console.log(`Place ${lastLocation} already had Valentine's day.`);
            } else {
                houses[lastLocation] -= 2;
                if (houses[lastLocation] === 0) {
                    console.log(`Place ${lastLocation} has Valentine's day.`);
                }
            }
        }
        mainCommand = input.shift();
    }
    console.log(`Cupid's last position was ${lastLocation}.`);
    if (houses.forEach((x) => x = 0)) {
        console.log(`Mission was successful.`);
    } else {
        // let leftHouses = 
        let result = houses.filter(x => x > 0)
        console.log(`Cupid has failed ${result.length} places.`)
    }
    console.log(`********END********`);

}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
