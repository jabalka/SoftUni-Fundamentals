function grades(grade){

    let isFail = (x) => {
        if(x < 3){
            isFail = true;
            console.log(`Fail ${(2)}`);
        } else {
            isFail = false;
        }
        return;
    }
    isFail(grade)

    if(isFail){
    } else if (grade < 3.50){
        console.log(`Poor ${(grade)}`);
    } else if (grade < 4.50){
        console.log(`Good ${(grade)}`);
    } else if (grade < 5.50){
        console.log(`Very good ${(grade)}`);
    } else {
        console.log(`Excellent ${(grade)}`);
    }
}

grades(3.33);
grades(4.50);
grades(2.99);





