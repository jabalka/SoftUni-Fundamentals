// each index receive pooints to the target index
// if target shot it reduces its value to -1 
// + reduces all other targets which > than current target with its value
// + increase all other targets which <= to shot target with its value
// target already shot can not be shot again
// shot target can not be reduced or increased
// when command === 'end' print and finish

function shootForWin(input) {

    let targetsValue = input.shift().split(' ').map(Number);
    let targetsValueLength = targetsValue.length - 1;
    let command = input.shift()
    let indexesShot = [];
    let shotCount = 0;
    let forIndex = 0;

    while (command != 'End') {
        let index = Number(command);

        if (!indexesShot.includes(index)) {
            if (!(index < 0 || index > targetsValueLength)) {
                let currentValue = targetsValue[index];
                targetsValue[index] = -1;
                shotCount++;
                indexesShot.push(index)
                for (element of targetsValue) {
                    if (!(indexesShot.includes(forIndex))) {
                        if (element > currentValue) {
                            targetsValue[forIndex] -= currentValue
                        } else if (element <= currentValue) {
                            targetsValue[forIndex] += currentValue
                        }
                    }
                    forIndex++;
                }
                forIndex = 0;
                //   targetsValue = targetsValue.map((x) => x > currentValue ? x - currentValue : x || x <= currentValue ? x + currentValue : x);
                // targetsValue = targetsValue.map((x) => x <= currentValue ? x + currentValue : x)
            }
        }
        command = input.shift()
    }
    console.log(`Shot targets: ${shotCount} -> ${targetsValue.join(' ')}`);
}

shootForWin((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
);
shootForWin((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
);