function city(object) {

    let objectKeys = Object.keys(object);
    for (let keys of objectKeys) {
        console.log(`${keys} -> ${object[keys]}`);
    }
}
let details = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}

city(details);