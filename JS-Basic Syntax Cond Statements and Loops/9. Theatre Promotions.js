function ticketSale(arg1, arg2) {
    let dayType = arg1;
    let customerAge = +arg2;
    let ticketPrice = 0;

    switch (dayType) {
        case "Weekday":
            if ((customerAge <= 18 && customerAge >= 0) || (customerAge > 64 && customerAge <= 122)) {
                ticketPrice = 12;
                console.log(ticketPrice);
            } else if (customerAge > 18 && customerAge <= 64) {
                ticketPrice = 18;
                console.log(ticketPrice);
            } else {
                console.log("Error");
            }
            ; break;
        case "Weekend":
            if ((customerAge <= 18 && customerAge >= 0) || (customerAge > 64 && customerAge <= 122)) {
                ticketPrice = 15;
                console.log(ticketPrice);
            } else if (customerAge > 18 && customerAge <= 64) {
                ticketPrice = 20;
                console.log(ticketPrice);
            } else {
                console.log("Error");
            }
            ; break;
        case "Holiday":
            if (customerAge <= 18 && customerAge >= 0) {
                ticketPrice = 5;
                console.log(ticketPrice);
            } else if (customerAge > 18 && customerAge <= 64) {
                ticketPrice = 12;
                console.log(ticketPrice);
            } else if (customerAge > 64 && customerAge <= 122) {
                ticketPrice = 10;
                console.log(ticketPrice);
            } else {
                console.log("Error");
            }
            ; break;
        default:
    }
    console.log(`********END*******`);
}

ticketSale('Weekday',
    42
)

ticketSale('Holiday', -12)

ticketSale('Holiday', 15)