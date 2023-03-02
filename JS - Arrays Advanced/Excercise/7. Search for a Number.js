function searchNum(arr1, arr2) {

    let numToTake = arr2.shift();
    let numToDelete = arr2.shift();
    let searchNum = arr2.shift();
    // if we use the For cycle :     let searchNumCount = 0;
    
    let newArray = arr1.splice(0, numToTake);
    newArray.splice(0, numToDelete)
    

    // for(let i = 0; i < newArray.length; i++){
    //     if(newArray[i] === searchNum){
    //         searchNumCount++;
    //     }
    // }
    // ---------instead of For cycle the code below:-----------
    newArray = newArray.filter((x) => x === searchNum);

    return console.log(`Number ${searchNum} occurs ${newArray.length} times.`);
}
// ------------sashi code-------------------
// function foo(arr, arr1) {
//     const result = arr.slice(0, arr1[0]);
//     result.splice(0, arr1[1]);
//     result = result.filter((x) => x === arr1[2]);

//     console.log(`Number ${arr1[2]} occurs ${result.length} times.`);
// }

searchNum([5, 3, 3, 3, 4, 1, 6, 3, 3],
    [5, 2, 3]
)