function studentInfo(arg1, arg2, arg3){

    let studentName = arg1;
    let studentAge = +arg2;
    let studentAvrgGrade = +arg3;

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentAvrgGrade.toFixed(2)}`);
}

studentInfo('John', 15, 5.54678)

studentInfo('Steve', 16, 2.1426)

studentInfo('Marry', 12, 6.00)