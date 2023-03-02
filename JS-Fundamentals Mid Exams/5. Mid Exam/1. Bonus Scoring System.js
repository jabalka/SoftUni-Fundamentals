function bonusScoring(input){

    // 1st line numb of students
    let numOfStudents = Number(input.shift());
    // 2nd total number of lectures
    let countLectures = Number(input.shift());
    // 3rd additional bonus:
    let bonus = Number(input.shift());
    let bonusFormula = 0
    let maxAttendance = [];

    for(let i = 0; i < input.length - 1; i++){
        let studentAttendance = input[i];
        // find student with maximum bonus and print them along with his attendances
        bonusFormula = (studentAttendance / countLectures) * (5 + bonus);
        // maxBonus.push(bonusFormula);
        // maxAttendance.push(studentAttendance);
        let newAr = [studentAttendance, Math.ceil(bonusFormula)];
        maxAttendance.push(newAr)
    }
    let [finalAttendancy, finalBonus] = maxAttendance.sort((a, b) => b[1] - a[1] || b[0] - a[0]).shift()
    console.log(`Max Bonus: ${finalBonus}.`);
    console.log(`The student has attended ${finalAttendancy} lectures.`)
}

bonusScoring([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'])

bonusScoring([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'])