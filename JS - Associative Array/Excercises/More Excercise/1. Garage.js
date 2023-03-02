function garage(input){

    let garages = {};
    let currentLine = input.shift();
 
    while(currentLine != undefined){
        currentLine = currentLine.split(', ');
        let garage = currentLine[0].charAt(0);
        if(!garages.hasOwnProperty(garage)){
            garages[garage] = [];
        }
        var currentCar = [];
        for(let i=0 ; i < currentLine.length; i++){
            let currentStage = currentLine[i];
            if(currentStage.includes('color')){
                let color = currentStage.split(' ').pop();
                currentCar.push(`color - ${color}`)
            } else if (currentStage.includes('fuel type')){
                let fuelType = currentStage.split(' ').pop();
                currentCar.push(`fuel type - ${fuelType}`)
            } else if (currentStage.includes('manufacture')){
                let manufacture = currentStage.split(' ').pop();
                currentCar.push(`manufacture - ${manufacture}`)
            }   
        }
        currentCar = currentCar.join(', ')
        garages[garage].push(currentCar);
        currentLine = input.shift();
    }
    Object.entries(garages).forEach(([eachGarage, vehicles]) => {
        console.log(`Garage № ${eachGarage}`);
        for(let each of vehicles){
            console.log(`--- ${each}`);
        }
    })
}
garage(['1 - color: blue, fuel type: diesel',
 '1 - color: red, manufacture: Audi', 
 '2 - fuel type: petrol', 
 '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])