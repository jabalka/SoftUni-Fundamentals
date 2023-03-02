function arenaTier(input) {

    // spaghetti mudufucker needs to be fixed!!!!

    let gladietors = {};

    let line = input.shift()
    while (!line.includes('Ave Cesar')) {
        if (line.includes('->')) {
            const [name, technique, skill] = line.split(' -> ');
            if (gladietors[name] === undefined) {
                gladietors[name] = {};
            }
            if (gladietors[name][technique] === undefined
                || gladietors[name][technique] < Number(skill)) {
                gladietors[name][technique] = Number(skill);
            }
        } else {
            let [firName, secName] = line.split(' vs ')
            if (gladietors[firName] !== undefined
                && gladietors[secName] !== undefined) {
                let firstGladTech = Object.entries(gladietors[firName]);
                let secondGladTech = Object.entries(gladietors[secName]);
                for (let eachA of firstGladTech) {
                    let equalA = eachA.shift();
                    let powerA = Number(eachA);
                    for (let eachB of secondGladTech) {
                        let equalB = eachB[0];
                        let powerB = Number(eachB[1]);
                        if (equalA === equalB) {
                            if (powerA > powerB) {
                                delete gladietors[secName];
                            } else {
                                delete gladietors[firName];
                            }
                            break;
                        }
                        if (equalA === equalB) {
                            break;
                        }
                    }
                }
            }
        }
        line = input.shift()
    }
    gladietors = Object.entries(gladietors).sort((a, b) => {
        let [nameA, techniqA] = a;
        let [nameB, techniqB] = b;
        techniqA = Object.entries(techniqA)
        techniqB = Object.entries(techniqB)
        let skillA = 0;
        let skillB = 0;
        for (let eachTechA of techniqA) {
            let [techniq, skill] = eachTechA;
            skillA += skill;
        }
        for (let eachTechB of techniqB) {
            let [techniq, skill] = eachTechB;
            skillB += skill;
        }
        return skillB - skillA
    })
    for (let each of gladietors) {
        let [name, techn] = each;
        techn = Object.entries(techn).sort((a, b) => b[1] - a[1]);
        let totalSkill = 0;
        for (let tech of techn) {
            let [techName, skillPoint] = tech;
            totalSkill += skillPoint
        }
        console.log(`${name}: ${totalSkill} skill`);
        for (let tech of techn) {
            let [techName, skillPoint] = tech;
            console.log(`- ${techName} <!> ${skillPoint}`);
        }
    }
    console.log(`********END*******`);
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
])

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])