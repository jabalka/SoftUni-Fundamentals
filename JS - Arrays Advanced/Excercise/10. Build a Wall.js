function wallConstruction(sections){

    let concreteArrey = [];
    let moneyPerCubic = 1900
    let totalMoney = 0;
    let index = 0;
    let dailyConcrete = 195;

    while (sections.some((x) => x !== 30)){
        sections = sections.map((x) => {
            if(x < 30){
                x += 1;
                concreteArrey[index] = (concreteArrey[index] || 0) + dailyConcrete;
            }
            return x;
        });
        index += 1;
    }
    // let dailyMiles = 0;
    // let fullSection = 0;

    // for(let i = 0; i < sections.length;i++){
    //     if(sections[i] != 30){
    //         sections[i] += 1;
    //         dailyMiles++;
    //     } else if (sections[i] == 30){
    //         fullSection++;
    //     }
    //     if(fullSection == sections.length){
    //         break;
    //     }
    //     if(i == sections.length - 1){
    //         i = -1;
    //         concreteArrey.push(dailyMiles * dailyConcrete);
    //         dailyMiles = 0;
    //         fullSection = 0;
    //     }
    // }
    concreteArrey.forEach((x) => totalMoney += x * moneyPerCubic);
    totalMoney = concreteArrey.reduce((a, b) => a + b) * moneyPerCubic

    return console.log(`${concreteArrey.join(', ')}\n${totalMoney} pesos`)
}

wallConstruction([21, 25, 28]);

wallConstruction([17]);

wallConstruction([17, 22, 17, 19, 17])