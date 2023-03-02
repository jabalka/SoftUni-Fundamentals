function softUniBar(input) {

    const regex = /%(?<name>[A-Z][a-z]*)%([^\|\$\%\.]+)?<(?<product>\w*)>([^\|\$\%\.]+)?\|(?<count>\d+)\|([^\|\$\%\.0-9]+)?(?<price>[0-9]+(\.[0-9]*)?)\$/g;
    let totalIncome = 0;

    for (const line of input) {
        if (line.match(regex)) {
            let current = regex.exec(line);
            let currentPrice = Number(current.groups.count) * Number(current.groups.price);
            totalIncome += currentPrice;
            console.log(`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
   'end of shift']);

softUniBar(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);