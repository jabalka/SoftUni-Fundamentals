function partTime(input) {

    let guestList = {};
    let guest = input.shift();
    guestList['VIP'] = [];
    guestList['regular'] = [];
    while (guest !== 'PARTY') {
        let identifier = guest[0];
        if (isNaN(identifier)) {
            guestList['regular'].push(guest);
        } else {
            guestList['VIP'].push(guest);
        }
        guest = input.shift();
    }

    input.forEach((person) => {
        if (guestList['VIP'].includes(person)) {
            let index = guestList['VIP'].indexOf(person);
            guestList['VIP'].splice(index, 1);
        } else if (guestList['regular'].includes(person)) {
            let index = guestList['regular'].indexOf(person);
            guestList['regular'].splice(index, 1);
        }
    })
    // ********* need to be fixed as if there is no values in one of the properties,
    //********* */ the new line is still printed!!!!


    console.log(guestList['VIP'].length
        + guestList['regular'].length + '\n'
        + guestList['VIP'].join('\n') + '\n'
        + guestList['regular'].join('\n'))
}

partTime(['7IK9Yo0h',
    '9NoBUajQ',
    '7NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)

partTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])