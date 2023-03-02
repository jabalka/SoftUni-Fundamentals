function legendaryFarming(input) {

    let key = {
        shards: 0,
        motes: 0,
        fragments: 0,
    };
    const legendary = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath'
    };
    let junk = {};
    let winner = undefined;
    input = input.split(' ').map((x) => x.toLowerCase());

    for (let i = 0; i < input.length; i += 2) {
        if (key[input[i + 1]] !== undefined) {
            key[input[i + 1]] += Number(input[i]);
            if (key[input[i + 1]] >= 250) {
                winner = legendary[input[i + 1]];
                key[input[i + 1]] = key[input[i + 1]] - 250;
                break;
            }
        } else {
            junk[input[i + 1]] =
                (junk[input[i + 1]] === undefined
                    ? 0
                    : Number(junk[input[i + 1]])) + Number(input[i]);
        }
    }

    key = Object.entries(key).sort((x, y) =>
        y[1] - x[1] !== 0 ? y[1] - x[1] : x[0].localeCompare(y[0])
    );
    junk = Object.entries(junk).sort((x, y) => x[0].localeCompare(y[0]));

    console.log(`${winner} obtained`);

    key.forEach((x) => console.log(`${x[0]}: ${x[1]}`));

    if (Object.keys(junk).length > 0) {
        junk.forEach((x) => console.log(`${x[0]}: ${x[1]}`));
    }
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
