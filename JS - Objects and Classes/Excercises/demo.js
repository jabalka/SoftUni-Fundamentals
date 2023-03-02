function demo(array) {

    let dictionary = array.reduce((a, b) => {
        const letter = b.charAt(0);
        a[letter] = []
        return a;
    }, {})

    array.map(line => {
        const letter = line.charAt(0);
        let formatted = line.split(' : ').join(': ');
        dictionary[letter].push(formatted);
    });
    dictionary = Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]));

    dictionary.forEach((key) => {
        console.log(`${key[0]}
  ${key[1].sort((a, b) => a.localeCompare(b)).join('\n  ')}`)
    });
}

demo(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
])