function houseParty(inputArray){

    let guestList = [];
    for(let i = 0; i < inputArray.length; i++){
        let current = inputArray[i];
        let splitCurr = current.split(' ');
        let name = splitCurr[0];
        if(current.includes('is going')){
            if(guestList.includes(name)){
                console.log(`${name} is already in the list!`)
            } else {
                guestList.push(name);
            }
        } else if (current.includes('is not going')){
            if(guestList.includes(name)){
                let index = guestList.indexOf(name);
                guestList.splice(index, 1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }

    return guestList.forEach(element => console.log(element));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)