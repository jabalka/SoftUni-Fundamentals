function destinationMap(input) {

    const regex = /([\=\/])(?<place>[A-Z][a-z]{3,})\1/g;
    let matches = input.match(regex);
    let destinations = [];

    if (matches) {
        for (let each of matches) {
            each = each.slice(1, -1);
            destinations.push(each);
        };
        console.log(`Destinations: ${destinations.join(', ')} \nTravel Points: ${destinations.join('').length}`);
    } else {
        console.log(`Destinations:\nTravel Points: 0`);
    }
}

destinationMap("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMap("ThisIs some InvalidInput");