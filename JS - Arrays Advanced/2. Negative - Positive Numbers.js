function firstLastK(inputArray){

    let newArray = [];

    for (element of inputArray){
        if (element >= 0){
            newArray.push(element);
        } else if (element < 0){
            newArray.unshift(element);
        }
    }

    for (let num of newArray){
        console.log(num);
    }
    return newArray
}
firstLastK([3, -2, 0, -1]);
firstLastK([7, -2, 8, 9]);
