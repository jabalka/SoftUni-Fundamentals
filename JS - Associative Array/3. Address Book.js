function addressBook(input) {

    let catalogueBook = {};

    for (let person of input) {
        let [name, address] = person.split(':');
        catalogueBook[name] = address;
    }

    Object.entries(catalogueBook)
        .sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]))
        .forEach(person => console.log(`${person[0]} -> ${person[1]}`));
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Billy:Aelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])