function listProducts(input){


    let sorted = input.sort();

    for(let i = 0; i < sorted.length; i++){
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

listProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
