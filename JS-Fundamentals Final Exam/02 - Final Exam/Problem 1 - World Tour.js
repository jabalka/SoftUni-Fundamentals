function wordTour(input) {

    let stops = input.shift();
    let newStr = stops;

    let commands = {
        'Add Stop': (str, [index, string]) => {
            if (index > 0 && index < newStr.length - 1) {
                str = str.substring(0, index) + string + stops.substring(index);
                newStr = str;
            };
        },
        'Remove Stop': (str, [startIndex, endIndex]) => {
            if (startIndex > 0 && startIndex < newStr.length - 1
                && endIndex > 0 && endIndex < newStr.length - 1) {
                str = str.substring(0, +startIndex) + newStr.substring(+endIndex + 1);
                newStr = str;
            };
        },
        Switch: (str, [oldString, newString]) => {
            if (str.includes(oldString)) {
                str = str.replaceAll(oldString, newString);
                newStr = str;
            }
        }
    };

    while (input[0] != 'Travel') {
        let [comName, ...arg] = input.shift().split(':');
        let command = commands[comName];
        command(newStr, arg);
    }
    console.log(`Ready for world tour! Planned stops: ${newStr}`);

}

wordTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])

wordTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])