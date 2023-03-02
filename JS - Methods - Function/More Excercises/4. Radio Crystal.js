function radioCrystal(array) {

    var desirableTickness = array[0];
    for (var i = 1; i < array.length; i++) {
        var ticknessOfCrystals = array[i];
        var xRayUsege = 0;
        var currentTichness = 0;
        var cutCount = 0;
        var lapCount = 0;
        var grindCount = 0;
        var etchCount = 0;
        var xRayCount = 0;

        const transportingWashing = (t) => {
            return ticknessOfCrystals = Math.trunc(t);
        }

        const cut = (t) => {
            return currentTichness = (t /= 4);
        }

        const lap = (t) => {
            return currentTichness = (t * 0.80);
        }

        const grind = (t) => {
            return currentTichness = (t - 20);
        }

        const etch = (t) => {
            return currentTichness = (t - 2);
        }

        const xRey = (t) => {
            xRayUsege++;
            return currentTichness = (t - 1)
        }

        function processing() {
            console.log(`Processing chunk ${ticknessOfCrystals} microns`);
            while (ticknessOfCrystals != desirableTickness) {
                cut(ticknessOfCrystals);
                ticknessOfCrystals = currentTichness;
                cutCount++;
                if (ticknessOfCrystals / 4 < desirableTickness) {
                    console.log(`Cut x${cutCount}`);
                    break;
                }
            }
            if (ticknessOfCrystals == desirableTickness) {
                console.log(`Transporting and washing`);
                return;
            };
            transportingWashing(currentTichness);
            console.log(`Transporting and washing`);


            while (ticknessOfCrystals > desirableTickness) {
                lap(ticknessOfCrystals);
                ticknessOfCrystals = currentTichness;
                lapCount++
                if (ticknessOfCrystals * 0.80 < desirableTickness) {
                    console.log(`Lap x${lapCount}`);
                    break;
                }
            }
            if (ticknessOfCrystals == desirableTickness) {
                console.log(`Transporting and washing`);
                return;
            };
            transportingWashing(currentTichness);
            console.log(`Transporting and washing`);

            while (ticknessOfCrystals > desirableTickness) {
                grind(ticknessOfCrystals);
                ticknessOfCrystals = currentTichness;
                grindCount++;
                if (ticknessOfCrystals - 20 < desirableTickness) {
                    console.log(`Grind x${grindCount}`);
                    break;
                }
            }
            if (ticknessOfCrystals == desirableTickness) {
                console.log(`Transporting and washing`);
                return;
            };
            transportingWashing(currentTichness);
            console.log(`Transporting and washing`);

            while (ticknessOfCrystals > desirableTickness) {
                etch(ticknessOfCrystals);
                ticknessOfCrystals = currentTichness;
                etchCount++;
                if (ticknessOfCrystals - 2 < desirableTickness) {
                    console.log(`Etch x${etchCount}`);
                    break;
                }
            }
            if (ticknessOfCrystals == desirableTickness) {
                console.log(`Transporting and washing`);
                return;
            };
            transportingWashing(currentTichness);
            console.log(`Transporting and washing`);

            while (ticknessOfCrystals > desirableTickness) {
                xRey(ticknessOfCrystals);
                ticknessOfCrystals = currentTichness;
                xRayCount++;
                if (ticknessOfCrystals - 1 < desirableTickness) {
                    console.log(`X-ray x${xRayCount}`);
                    break;
                }
            }
        }
        processing()
        console.log(`Finished crystal ${currentTichness} microns`)
    }
}

radioCrystal([1000,
    4000,
    8100])