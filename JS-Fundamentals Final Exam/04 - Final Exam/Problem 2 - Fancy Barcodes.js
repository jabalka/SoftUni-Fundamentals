function barcodesFancy(input) {

    let isValid = false;

    input.forEach((barcode) => {
        if (barcode[0] == '@' && barcode[1] == '#') {
            barcodeInitial = '';
            barcodeInitial += barcode[0];
            for (let i = 1; i < barcode.length; i++) {
                if (barcode[i] == '#') {
                    barcodeInitial += barcode[i];
                } else {
                    break;
                }
            }
            let endInitial = barcode.slice(-barcodeInitial.length)
            barcode = barcode.slice(barcodeInitial.length, -endInitial.length);
            let barcodeGroup = '';
            if (barcodeInitial == endInitial
                && barcode.length >= 6
                && barcode[0] == barcode[0].toUpperCase()
                && barcode[barcode.length - 1] == barcode[barcode.length - 1].toUpperCase()) {
                for (let char of barcode) {
                    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90
                        || char.charCodeAt() >= 97 && char.charCodeAt() <= 122
                        || char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                        isValid = true;
                        if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                            barcodeGroup += char;
                        }
                    } else {
                        isValid = false;
                        break
                    }
                }
            }
            if (isValid) {
                if (barcodeGroup !== '') {
                    console.log(`Product group: ${barcodeGroup}`);
                } else {
                    console.log(`Product group: 00`);
                }
            } else {
                console.log(`Invalid barcode`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    })
    console.log('********************')
}

barcodesFancy((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]))

barcodesFancy((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]))