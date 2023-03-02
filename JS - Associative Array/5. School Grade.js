function schoolGrades(input) {

    let grades = new Map();

    for (let person of input) {
        person = person.split(' ');
        let name = person.shift();
        let grade = person.map(Number);

        if (!grades.has(name)) {
            grades.set(name, []);
        }
        let existing = grades.get(name);
        for (let eachGrade of grade) {
            existing.push(eachGrade);
        }

    }
    let sorted = Array.from(grades).sort(compareGrades);

    for (let [name, grade] of sorted) {
        console.log(`${name}: ${grade.join(', ')}`)
    }

    function compareGrades([nameA, gradeA], [nameB, gradeB]) {
        let avargA = gradeA.reduce((a, b) => a + b, 0) / gradeA.length;
        let avargB = gradeB.reduce((a, b) => a + b, 0) / gradeB.length;

        return avargA - avargB;
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])