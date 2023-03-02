function theLift(input){

    let peopleQue = Number(input[0]);

    let maxInWagon = 4
    input = input[1].split(' ').map(Number);
    for(let i = 0; i < input.length; i++){
        let currentWagon = input[i];
        if(currentWagon != maxInWagon && peopleQue >= 4){
            input[i] += maxInWagon - currentWagon;
            peopleQue -= maxInWagon - currentWagon
        }else if(peopleQue < 4 && peopleQue > 0 && currentWagon != maxInWagon){
            input[i] += peopleQue - currentWagon;
            peopleQue -= peopleQue;
        }
        if (peopleQue == 0 && (input[i] < 4 || input[i + 1] < 4)){
            console.log(`The lift has empty spots!\n${input.join(' ')}`);
            break;
        } else if (peopleQue != 0 && i == input.length - 1){
            console.log(`There isn't enough space! ${peopleQue} people in a queue!\n${input.join(' ')}`);
            break;
        } else if(peopleQue == 0 && i == input.length - 1 && input[i] == 4){
            console.log(input.join(' '));
            break;
        }
    }
}


theLift([
    "15",
    "0 0 0 0 0"
   ]
)
   
theLift([
    "20",
    "0 2 0"
   ]
   )