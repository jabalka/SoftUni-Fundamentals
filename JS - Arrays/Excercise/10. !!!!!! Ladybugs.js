function ladybugsField(arr){

    const fieldLength = arr.shift();
    const bugsIndexes = arr.shift().split(' ');
    const field = [];

    for(let i = 0; i < fieldLength; i++){
        if (bugsIndexes.includes(i.toString())){
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let command of arr){
        command = command.split(' ');
        let bugIndex = Number(command[0]);
        let direction = command[1];
        let step = Number(command[2]);

        if(field[bugIndex] == 1){
            field[bugIndex] = 0;
            let isOnField = true;
            let currentIndex = bugIndex;
            while (isOnField){
                if(direction == 'right'){
                    currentIndex += step;
                } else {
                    currentIndex -= step;
                }
                if (field[currentIndex] == 0){
                    field[currentIndex] = 1;
                    break;
                }
                isOnField = currentIndex >= 0 && currentIndex < field.length;
            }
        }
    }

    console.log(field.join(' '));
    


}

ladybugsField([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']
)