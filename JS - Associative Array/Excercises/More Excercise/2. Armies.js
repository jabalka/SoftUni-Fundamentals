function armyData(input) {

    let barracks = {};

    for (let line of input) {
        if (line.includes('arrives')) {
            line = line.split(' arrives').join('');
            let name = line;
            if (!barracks.hasOwnProperty(name)) {
                barracks[name] = {};
            }
        } else if (line.includes('defeated')) {
            line = line.split(' defeated').join('');
            let name = line;
            if (barracks.hasOwnProperty(name)) {
                delete barracks[name];
            }
        } else if (line.includes(':')) {
            let [nameCom, armyName, number] = line.split(': ').join(', ').split(', ');
            number = Number(number);
            if (barracks.hasOwnProperty(nameCom)) {
                barracks[nameCom][armyName] = number;
            }
        } else if (line.includes('+')) {
            let [armyName, number] = line.split(' + ');
            number = Number(number);
            for (let eachCom of Object.entries(barracks)) {
                let capName = eachCom[0];
                if (barracks[capName][armyName])
                    barracks[capName][armyName] += number;
            }
        }
    }
    let sortedCommanders = Object.entries(barracks)
        .sort(sortComm).forEach((each) => {
            let [name, army] = each;
            let totalArmy = 0;
            army = Object.entries(army).sort((a, b) => b[1] - a[1]);
            for (let eachArmy of army) {
                totalArmy += eachArmy[1];
            }
            console.log(`${name}: ${totalArmy}`);
            for (let [name, number] of army) {
                console.log(`>>> ${name} - ${number}`);
            }
        })

    function sortComm([commanderA, commandA], [commanderB, commandB]) {
        let armyTotalA = 0;
        for (let each of Object.entries(commandA)) {
            armyTotalA += Number(each[1]);
        };
        let armyTotalB = 0;
        for (let each of Object.entries(commandB)) {
            armyTotalB += Number(each[1]);
        };
        return armyTotalB - armyTotalA;
    }
}
armyData(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'])