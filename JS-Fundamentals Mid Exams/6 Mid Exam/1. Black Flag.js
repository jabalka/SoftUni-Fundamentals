

// how much plunder the pirates manage to gather/every day they gather

// more ships attacked every 3rd day and add 50% additional of the daily plunder

// every 5th day pirates get into warship and loose 30% of the total plunder

// if gained plunder is more or equal to the target the print ---

// if gained plunder is less than target. calculate the % left and print ---

//  both numbers formatted to 2nd decimal place

function blackFlag(input) {
    // expected plunder // plunder for a day // days pirates last
    let [piratingLast, dailyPlunder, expectedPlunder] = input.map(Number);
    let totalPlunder = 0;

    for (let i = 1; i <= piratingLast; i++) {
        if (i % 3 == 0) {
            totalPlunder += dailyPlunder * 1.50;
        } else {
            totalPlunder += dailyPlunder;
        }
        if (i % 5 == 0) {
            totalPlunder *= 0.70;
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((totalPlunder / expectedPlunder) * 100).toFixed(2)}% of the plunder. `);
    }
}

blackFlag(["5",
    "40",
    "100"]);
blackFlag(["10",
    "20",
    "380"]);