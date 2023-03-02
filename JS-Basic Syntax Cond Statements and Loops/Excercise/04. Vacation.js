function vacation(arg1, arg2, arg3) {

    let groupSize = +arg1;
    let groupType = arg2;
    let dayType = arg3;
    let totalPrice = 0;

    let price = 0;

    switch (dayType) {
        case "Friday":
            if (groupType == "Students") {
                price = 8.45;
            } else if (groupType == "Business") {
                price = 10.90;
            } else if (groupType == "Regular") {
                price = 15;
            }; break;
        case "Saturday":
            if (groupType == "Students") {
                price = 9.80;
            } else if (groupType == "Business") {
                price = 15.60;
            } else if (groupType == "Regular") {
                price = 20;
            }; break;
        case "Sunday":
            if (groupType == "Students") {
                price = 10.46;
            } else if (groupType == "Business") {
                price = 16;
            } else if (groupType == "Regular") {
                price = 22.50;
            }; break;
    }
    totalPrice = price * groupSize;
    if(groupSize >= 30 && groupType == "Students"){
        totalPrice *= 0.85;
    } else if (groupSize >= 100 && groupType == "Business"){
        totalPrice -= price * 10;
    } else if (groupSize >= 10 && groupSize <= 20 && groupType == "Regular"){
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday"
    )

vacation(40,
    "Regular",
    "Saturday"
    )