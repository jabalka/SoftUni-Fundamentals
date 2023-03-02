function storageFn(input){

    let map = new Map();

    for (let productDetails of input){
        let [product, qty] = productDetails.split(' ');
        qty = Number(qty);

        if(!map.has(product)){
            map.set(product, +qty);
        } else {
            let currQty = map.get(product);
            let newQty = currQty + qty;
            map.set(product, newQty);
        }
    }
    for(let [product, qty] of map){
        console.log(`${product} -> ${qty}`);
    }
    //          or :
    // for(let product of map){
    //     console.log(`${product[0]} -> ${product[1]}`);
    // }

}

storageFn(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])