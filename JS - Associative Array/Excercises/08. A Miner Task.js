function minerTask(input) {

    let storage = {};

    for (let i = 0; i < input.length; i++) {
        const resource = input[i];
        const qnty = Number(input[++i]);
        if (!storage.hasOwnProperty(resource)) {
            storage[resource] = qnty;
        } else {
            storage[resource] += qnty; 
        }
    }
    
    storage = Object.entries(storage).forEach((element) => {
        const [resource, quantity] = element;
        console.log(`${resource} -> ${quantity}`);
    })

    console.log(`*******END*******`);
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])
    