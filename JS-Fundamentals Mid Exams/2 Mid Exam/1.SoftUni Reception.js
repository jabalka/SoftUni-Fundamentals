// 3 employees working
// each employee handle different number of students per hour
// how much time will take to answer all the questions

function softUniReception(input) {
    // fourth line students count
    let studentsCount = Number(input.pop());
    // first 3 lines representing number of students that each employee can handle per hour*
    let totalStudentsPerHour = input.map(Number).reduce((a, b) => a + b, 0);
    // every fourth hour all employees have break - no answers for this hour
    let hour = 0;

    while (studentsCount > 0) {
        hour++;
        if (hour % 4 != 0) {
            studentsCount -= totalStudentsPerHour;
        }
    }
    //calculate and and print how many hours needed to answer all the question
    console.log(`Time needed: ${hour}h.`);
}

softUniReception(['5', '6', '4', '20']);

softUniReception(['1', '2', '3', '45']);

softUniReception(['3', '2', '5', '40']);