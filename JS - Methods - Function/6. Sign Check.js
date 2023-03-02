function numberCheck(numOne, numTwo, numThree) {

    let isNegative = false;
    let isPositive = false;

    const Negative = (x, y, c) => {
        if (x >= 0 && y > 0 && c < 0) {
            isNegative = true;
        } else if (x > 0 && y >= 0 && c < 0){
            isNegative = true;
        } else if (x >= 0 && y < 0 && c > 0){
            isNegative = true;
        } else if (x > 0 && y < 0 && c >= 0) { 
            isNegative = true;
        } else if (x < 0 && y > 0 && c > 0) {
            isNegative = true;
        } else if (x < 0 && y > 0 && c >= 0){
            isNegative = true;
        } else if (x < 0 && y < 0 && c < 0){
            isNegative = true;
        }
        return;
    }
    Negative(numOne, numTwo, numThree)

    const Positive = (x, y, c) => {
        if (x < 0 && y < 0 && c >= 0){
            isPositive = true;
        } else if (x < 0 && y >= 0 && c < 0){
            isPositive = true;
        } else if (x >= 0 && y < 0 && c < 0){
            isPositive = true;
        } else if (x < 0 && y == 0 && c >= 0){
            isPositive = true;
        }
        return;
    }
    Positive(numOne, numTwo, numThree)

    if(isNegative){
        console.log(`Negative`);
    } else if(isPositive){
        console.log(`Positive`);
    }
    console.log(`*******END*******`);
}

numberCheck(5,
    12,
    -15
    )

numberCheck(-6,
    -12,
    14,
    );

numberCheck(-1,
    -2,
     -3
    );

numberCheck(-1,
    0,
   1
   );