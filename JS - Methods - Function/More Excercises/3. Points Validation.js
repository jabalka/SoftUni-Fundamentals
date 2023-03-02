function pointsValidation(array){

        var firstPoint = +array[0];
        var secondPoint = +array[1];
        var thirdPoint = +array[2];
        var fourthPoint = +array[3];

        var firstNum = `{${firstPoint}, ${secondPoint}}`;
        var secondNum = `{${thirdPoint}, ${fourthPoint}}`;


        function validNumber(a, b, c, d){
            if(a > 0 && b == 0 ||
                a == 0 && b > 0 ||
                a == 0 && b ==0){
                console.log(`${firstNum} to {0, 0} is valid`);
            } 
            if (a > 0 && b > 0){
                console.log(`${firstNum} to {0, 0} is invalid`);
            }
            if (c == 0 && d > 0 ||
                c > 0 && d == 0 ||
                c == 0 && d == 0){
                console.log(`${secondNum} to {0, 0} is valid`);
            }
            if (c > 0 && d > 0){
                console.log(`${secondNum} to {0, 0} is invalid`);
            }
            if(a >= 0 && c >= 0 && b == d ||
                a >= 0 && d >= 0 && b == c){
                console.log(`${firstNum} to ${secondNum} is valid`);
            } else {
                console.log(`${firstNum} to ${secondNum} is invalid`);
            }

        }
        validNumber(firstPoint, secondPoint, thirdPoint, fourthPoint);
}
    
pointsValidation([3, 3, 3, 4]);
pointsValidation([2, 1, 1, 1]);