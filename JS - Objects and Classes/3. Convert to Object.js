function toObject(input) {

    let jsonToObject = JSON.parse(input);
    let objectKeys = Object.keys(jsonToObject);
    
    for (let keys of objectKeys) {
        console.log(`${keys}: ${jsonToObject[keys]}`);
    }
}

toObject('{"name": "George", "age": 40, "town": "Sofia"}')