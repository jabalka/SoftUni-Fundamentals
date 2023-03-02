function piccolo(input) {

    let parking = {};

    input.forEach((each) => {
        let [action, numberPlate] = each.split(', ');
        if (action == 'IN') {
            parking[numberPlate] = 1
        } else if (action == 'OUT') {
            delete parking[numberPlate];
        }
    })

    if (Object.keys(parking).length > 0) {
        console.log(Object.keys(parking)
            .sort((carA, carB) => carA.localeCompare(carB)).join('\n'));
    } else {
        console.log(`Parking Lot is Empty`)
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']

)

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)