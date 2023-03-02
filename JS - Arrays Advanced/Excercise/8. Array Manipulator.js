function arrayMan(arrInt, arrStr){

    let index = 0;

    for(let element of arrStr){
        let splitted = element.split(' ');
        let command = splitted[0];

        switch (command){
            case 'add': 
                index = splitted[1]; 
                element = Number(splitted[2]); 
                arrInt.splice(index, 0, element); break;
            case 'addMany':
                index = Number(splitted[1]);
                for(let i = 2; i < splitted.length; i++){
                    let element = Number(splitted[i]);
                    arrInt.splice(index, 0, element); 
                    index++;
                }
                ; break;
            case 'contains':
                element = Number(splitted[1]);
                console.log(arrInt.indexOf(element)); break;
            case 'remove':
                index =  splitted[1];
                arrInt.splice(index, 1); break;
            case 'shift':
                let positions = splitted[1];
                for(let i = 0; i < positions; i++){
                    let currentNum = arrInt.shift();
                    arrInt.push(currentNum);
                }; break;
            case 'sumPairs':
                for(let i = 0; i < arrInt.length; i++){
                    let newElem = arrInt[i] + arrInt[i + 1];
                    arrInt.splice(i, 2)
                    arrInt.unshift(newElem);
                }; break;
            case 'print':
                console.log(arrInt);break;
        }
        
    }

    return; 
}

// arrayMan([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
//     )
arrayMan([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )