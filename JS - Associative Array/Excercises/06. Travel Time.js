function travelTime(input) {

    const destinations = {};

    input.forEach((line) => {
        let [country, town, cost] = line.split(' > ');
        if (destinations[country] === undefined) {
            destinations[country] = {};
        }
        if (destinations[country][town] === undefined
            || destinations[country][town] > Number(cost)) {
            destinations[country][town] = Number(cost);
        }
    })
    const sorted = Object.entries(destinations)
        .sort((a, b) => a[0].localeCompare(b[0]) && a[1] - b[1])
    sorted.forEach((el) => {
        el = Array.from(el)
        let [country, towns] = el;
        let result = [];
        result.push(`${country} >`)
        towns = Object.entries(towns).sort((a, b) => a[1] - b[1])
        for (let eachTown of towns) {
            let [town, cost] = eachTown;
            result.push(` ${town} > ${cost} `)
        }
        console.log(result.join(''))
    })
}

travelTime([
    "Bulgaria > Sofia > 1500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 12000",
    "Bulgaria > Sofia > 1200"
])