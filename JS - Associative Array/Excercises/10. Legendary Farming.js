function legendaryFarming(input) {

    let arr = input.split(' ');
    let farmingMaterials = {};
    farmingMaterials['junks'] = {};
    farmingMaterials['materials'] = {};

    for (let i = 0; i < arr.length; i++) {
        let qnty = Number(arr[i]);
        let material = arr[++i].toLowerCase();

        if (material == 'shards' || material == 'fragments' || material == 'motes') {
            if (!farmingMaterials['materials'].hasOwnProperty(material)) {
                farmingMaterials['materials'][material] = qnty;
            } else {
                farmingMaterials['materials'][material] += qnty;
            }
        } else {
            if (!farmingMaterials['junks'].hasOwnProperty(material)) {
                farmingMaterials['junks'][material] = qnty;
            } else {
                farmingMaterials['junks'][material] += qnty;
            }
        }

        if (material == 'shards') {
            if (farmingMaterials['materials'][material] > 250) {
                console.log(`Shadowmourne obtained`);
                farmingMaterials['materials'][material] -= 250;
                break;
            }
        } else if (material == 'fragments') {
            if (farmingMaterials['materials'][material] > 250) {
                console.log(`Valanyr obtained`);
                farmingMaterials['materials'][material] -= 250;
                break;
            }
        } else if (material == 'motes') {
            if (farmingMaterials['materials'][material] > 250) {
                console.log(`Dragonwrath obtained`);
                farmingMaterials['materials'][material] -= 250;
                break;
            }
        }///////
    }
    let materialSorted = Object.entries(farmingMaterials['materials']).sort(([materlA, qntyA], [materlB, qntyB]) => {
        return qntyB - qntyA || materlA.localeCompare(materlB)
    }).forEach(([materl, qnty]) => console.log(`${materl}: ${qnty}`))

    let junksSorted = Object.entries(farmingMaterials['junks']).sort(([materlA, qntyA], [materlB, qntyB]) => {
        return materlA.localeCompare(materlB)
    }).forEach(([materl, qnty]) => console.log(`${materl}: ${qnty}`))

    console.log(`*********END*********`);
}

// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments');

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');