function systemData(input) {

    let result = input.reduce((a, v) => {
        const [systemName, componentName, subcomponentName] = v.split(' | ');
        if (!a.has(systemName)) {
            a.set(systemName, new Map());
        }
        if (!a.get(systemName).has(componentName)) {
            a.get(systemName).set(componentName, []);
        }
        a.get(systemName).get(componentName).push(subcomponentName);
        return a
    }, new Map())

    result = [...result.entries()].sort((a, b) => {
        return b[1].size - a[1].size !== 0
            ? b[1].size - a[1].size
            : a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    });
    result = result.map((x) => [
        x[0],
        [...x[1].entries()].sort((x, y) => y[1].length - x[1].length),
    ]);
    result.forEach((x) => {
        console.log(`${x[0]}`);
        x[1].forEach((x1) => {
            console.log(`|||${x1[0]}`);
            x1[1].forEach((x2) => console.log(`||||||${x2}`));
        })
    });



    // result = result.map((x) => [
    //     x[0],
    //     [...x[1].entries()].sort((x, y) => y[1].length - x[1].length),
    // ]);
    // result.forEach((x) => {
    //     console.log(`${x[0]}`);
    //     x[1].forEach((x1) => {
    //         console.log(`|||${x1[0]}`);
    //         x1[1].forEach((x2) => console.log(`||||||${x2}`));
    //     });
    // });


}

systemData(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
])


// let dataBase = {};
// input.forEach((line) => {
//     const [systemName, componentName, subcomponentName] = line.split(' | ');
//     if(!dataBase.has(systemName)){
//         dataBase.set(system, new Map());
//     }
//     if (!dataBase.get(systemName).has(componentName)){
//         dataBase.get(systemName).set(componentName, []);
//     }
//     dataBase.get(systemName).get(componentName).push(subcomponentName)
// })
// console.log(dataBase)