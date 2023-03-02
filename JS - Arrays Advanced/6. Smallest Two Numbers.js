function smallestTwo(inputArray){

    let sortedInAscending = inputArray.sort((a, b) => {
        return a - b;
    })
    let result = sortedInAscending.slice(0, 2);

    return console.log(result.join(' '));
}

smallestTwo([30, 15, 50, 5])

smallestTwo([3, 0, 10, 4, 7, 3])