function meetings(input) {

    let catalogue = {};
    for (let each of input) {

        let [day, name] = each.split(' ');
        // Automaticlly it replace the value if it exists:
        if (catalogue.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            catalogue[day] = name;
            console.log(`Scheduled fo ${day}`)
        }
    }
    Object.entries(catalogue).forEach(meeting => console.log(`${meeting[0]} -> ${meeting[1]}`));
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])