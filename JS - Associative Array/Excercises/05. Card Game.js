function cardGame(input) {

    let cards = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let types = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    let people = new Map()

    input.forEach((line) => {
        let [name, hand] = line.split(': ');
        hand = hand.split(', ');
        if (!people.has(name)) {
            people.set(name, []);
        }
        let existingCards = people.get(name);
        for (let card of hand) {
            if (!existingCards.includes(card)) {
                existingCards.push(card);
            }
        }
    })
    Array.from(people).forEach(([person, hand]) => {
        let i = 0;
        for (let eachCard of hand) {
            eachCard = eachCard.split('');
            let type = eachCard.pop();
            let cardValue = eachCard.join('');
            let currentCardVal = (cards[cardValue] * types[type]);
            hand[i] = currentCardVal;
            i++;
        };
        hand = hand.reduce((a, b) => a + b, 0);
        console.log(`${person}: ${hand}`);
    })
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])