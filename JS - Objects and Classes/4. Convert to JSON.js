function toJson(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor,
    }

    return console.log(JSON.stringify(person));

}

toJson('George',
    'Jones',
    'Brown'
)