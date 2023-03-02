function reverseAnArrayofNumbers(n, array){

    let newArray = [];

    for(let x = n - 1; x >= 0; x--){

        newArray.push(array[x]);
        
    }
    console.log(newArray.join(' '));

 }
 reverseAnArrayofNumbers(3, [10, 20, 30, 40, 50]);
 reverseAnArrayofNumbers(4, [-1, 20, 99, 5]);
 reverseAnArrayofNumbers(2, [66, 43, 75, 89, 47]);