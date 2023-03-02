function arrayModifier(input) {

    let initialArray = input.shift().split(' ').map(Number);
    let command = input.shift();

    while (!command.includes('end')) {
        let [mainCommand, index1, index2] = command.split(' ');
        if (mainCommand == 'swap') {
            let tempValue = initialArray[index2];
            initialArray[index2] = initialArray[index1];
            initialArray[index1] = tempValue;
        } else if (mainCommand == 'multiply') {
            initialArray[index1] *= initialArray[index2];
        } else {
            initialArray = initialArray.map((x) => x -= 1);
        }
        command = input.shift();
    }
    console.log(initialArray.join(', '));
    console.log(`********END*******`);
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
)
