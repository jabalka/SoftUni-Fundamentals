function leapYear(arg){

    let year = +arg;

    if(year % 4 == 0){
        console.log(`yes`);
    } else {
        console.log(`no`);
    }

}

leapYear(1984)

leapYear(2003)

leapYear(4)