function train(inputArray){

    let wagonNumb = inputArray.shift().split(' ').map(Number);
    let maxCapacity = Number(inputArray.shift());

    for(let i = 0; i < inputArray.length; i++){
        let current = inputArray[i];
        if(current.includes('Add')){
            var newWagon = Number(current.split(' ')[1]);
            wagonNumb.push(newWagon);
        } else {
            for(let r = 0; r < wagonNumb.length; r++){
               if (addingPassangers(Number(current), wagonNumb[r])){
                wagonNumb[r] += Number(current); // instead of this the two lines below:
                // let sum = Number(current) + wagonNumb[r];
                // wagonNumb.splice(r, 1, sum);
                break;
            };
        }
        }
    }
 

    function addingPassangers(a, b){
        if(a + b <= maxCapacity){
            return a + b;
        }
        
    }

    return console.log(wagonNumb.join(' '))
}


train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);