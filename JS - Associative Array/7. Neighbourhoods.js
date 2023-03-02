function neighborgood(input) {

    let listOfNeighborhood = input.shift().split(', ');
    let list = new Map();
    listOfNeighborhood.forEach((address) => list.set(address, []));

    // ----- instead of the lambda function above: -----

    // for (let eachNeigh of listOfNeighborhood) {
    //     list.set(eachNeigh, []);
    // }

    for (let line of input) {
        let [currentNeighbor, name] = line.split(' - ');
        if (listOfNeighborhood.includes(currentNeighbor)) {
            let existing = list.get(currentNeighbor);
            existing.push(name)
        }
    }
    // Array.from --- can be replaced by "..." in a square brackets as below:
    [...list].sort(compareToOther).forEach((element) => {
        let [neighbor, people] = element;
        console.log(`${neighbor} : ${people.length}`);
        for (let person of people) {
            console.log(`--${person}`);
        }
    })
    // ----- instead of the lambda function above: -----

    // let sorted = Array.from(list).sort(compareToOther);
    // for (let each of sorted) {
    //     let [neighbor, people] = each;
    //     console.log(`${neighbor} : ${people.length}`)
    //     for (let person of people) {
    //         console.log(`--${person}`);
    //     }
    // }

    function compareToOther([nHoonA, namesA], [nHoonB, namesB]) {
        return namesB.length - namesA.length;
    }
}

neighborgood(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])