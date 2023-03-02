function needForSpeed(input) {

    let n = Number(input.shift());
    let cars = {};

    let commands = {
        Drive: (cars, [carName, distance, fuel]) => {
            let car = cars[carName];
            [distance, fuel] = [(Number(distance)), Number(fuel)];
            if (car.fuel > fuel) {
                car.mileage += distance;
                car.fuel -= fuel;
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }
            if (car.mileage >= 100000) {
                delete cars[carName];
                console.log(`Time to sell the ${carName}`);
            }
        },
        Refuel: (cars, [carName, fuel]) => {
            let car = cars[carName];
            fuel = Number(fuel);
            if (car.fuel + fuel >= 75) {
                console.log(`${carName} refueled with ${75 - car.fuel} liters`);
                car.fuel = 75;
            } else {
                car.fuel += fuel;
                console.log(`${carName} refueled with ${fuel} liters`);
            }
        },
        Revert: (cars, [carName, kilometers]) => {
            let car = cars[carName];
            kilometers = Number(kilometers)
            if (car.mileage - kilometers < 10000) {
                car.mileage = 10000;
            } else {
                car.mileage -= kilometers;
                console.log(`${carName} mileage decreased by ${kilometers} kilometer`)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    };
    while (input[0] !== 'Stop') {
        let [cmd, ...arg] = input.shift().split(' : ');
        let command = commands[cmd](cars, arg);
    }
    Object.entries(cars).forEach(([car, data]) => {
        let [mileage, fuel] = Object.values(data);
        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    })
    console.log(`******************************`)
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'])
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'])