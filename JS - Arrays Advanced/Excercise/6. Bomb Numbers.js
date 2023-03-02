function bomb(initialSeq, specBomb){

    const bombNum = specBomb.shift();
    const bombPower = specBomb.shift();

    // my code:
    // while(initialSeq.includes(bombNum)){
    //     let bombIndex = initialSeq.indexOf(bombNum);
    //     let start = bombIndex - bombPower;
    //     let end = (bombPower * 2) + 1
    //     initialSeq.splice(start, end);  
    // }
    // sash code:
    for(let i = 0; i < initialSeq.length; i++){
        if(initialSeq[i] === bombNum){
            initialSeq.splice(i - bombPower > 0 ? i - bombPower : 0, bombPower * 2 + 1);
            i = 0;
        }
    }
    
//  console.log(arr1.reduce((a, v) => a + v, 0));
// reduces the array as summirises each element till one left
    let sum = 0;
    initialSeq.forEach((x) => sum += x);

    return console.log(sum)

}

bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )
bomb([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    )
bomb([1, 7, 7, 1, 2, 3],
    [7, 1]
    )
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    )