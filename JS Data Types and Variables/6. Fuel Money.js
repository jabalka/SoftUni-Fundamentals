function fuelMoney(distance, passengers, pricePerLiter){

    let consumtionPerJourney = (distance / 100) * 7;
    let totalLitresNeeded = consumtionPerJourney + (passengers * 0.100);

    console.log(`Needed money for that trip is ${totalLitresNeeded * pricePerLiter} lv`)
}

fuelMoney(260, 9, 2.49)
fuelMoney(90, 14, 2.88)