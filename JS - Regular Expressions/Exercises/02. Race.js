function race(input){

    const regexNames = /[A-Za-z]/g
    const regexNumbers = /[\d]/g

    let names = input.shift().split(', ');
    let racers = {};
    names.forEach(name => {
        racers[name] = 0;
    });

    for(const line of input){
        let match = line.match(regexNames)
        let name = match.join('')
        if(racers.hasOwnProperty(name)){
            let numbers = line.match(regexNumbers).map(Number).reduce((a, b) => a+b,0)
            racers[name] += numbers;
        }
    }
    let sorted = Object.keys(racers).sort((a,b) => racers[b] - racers[a]);
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2st place: ${sorted[1]}`);
    console.log(`3st place: ${sorted[2]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])