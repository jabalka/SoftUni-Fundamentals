function townsData(inputArray) {


    // not in requirements but it is better approach,
    // and if used the object creator below should be erased!
    // class Town {
    //     constructor(town, latitude, longitude){
    //         this.town = town;
    //         this.latitude = latitude;
    //         this.longitude = longitude;
    //     }
    // }

    for (let city of inputArray) {
        let [name, latit, longti] = city.split(' | ');
        let town = {
            town: name,
            latitude: Number(latit).toFixed(2),
            longitude: Number(longti).toFixed(2)
        }
        console.log(town);
    }
}

townsData(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)