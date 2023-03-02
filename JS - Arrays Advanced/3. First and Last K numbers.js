function firstLastK(inputArray) {

    let k = Number(inputArray.shift());

    let firstKnumbers = inputArray.slice(0, k).join(' ');
    let lastKnumbers = inputArray.slice(-k).join(' ');

    

    return console.log(`${firstKnumbers}\n${lastKnumbers}`);
}

firstLastK([2, 7, 8, 9]);
firstLastK([3, 6, 7, 8, 9]);