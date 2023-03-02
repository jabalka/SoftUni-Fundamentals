function thePianist(input) {

    let commands = {
        Add: (pieces, [pieceName, composer, key]) => {
            if (!pieces.hasOwnProperty(pieceName)) {
                pieces[pieceName] = {
                    composer: composer,
                    key: key
                }; console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${pieceName} is already in the collection!`);
            }
        },
        Remove: (pieces, [piece]) => {
            if (pieces[piece]) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!"`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        },
        ChangeKey: (pieces, [piece, newKey]) => {
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }
    let pieces = {};
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let [namePiece, composer, key] = input.shift().split('|');
        pieces[namePiece] = {
            composer: composer,
            key: key
        }
    }
    while (input[0] != 'Stop') {
        let [operation, ...arg] = input.shift().split('|');
        let command = commands[operation];
        command(pieces, arg);
    }
    Object.entries(pieces).forEach(([piece, { composer, key }]) => {
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    })
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'])