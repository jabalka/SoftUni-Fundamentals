function distinct(inputArray){

    for (let i = 0; i < inputArray.length; i++){
        let index = inputArray.indexOf(inputArray[i], i + 1)

        while (index !== -1){
            inputArray.splice(index, 1);
            index = inputArray.indexOf(inputArray[i], i + 1);
        }
            // does not delete repeting elements more than twice as the one above!
        // for(let i = r + 1; i < inputArray.length; i++){
        //     if(inputArray[r] === inputArray[i]){
        //         inputArray.splice(i, 1);
        //     }
        // }
    }
    return console.log(inputArray.join(' '))
}

distinct([1, 4, 2, 3, 4, 4, 4])
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinct([20, 8, 12, 13, 4, 4, 8, 5])