function softUniStudents(input) {

    let courses = {};

    input.forEach((line) => {
        if (line.includes(': ')) {
            let [courseName, capacity] = line.split(': ');
            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = {};
                courses[courseName]['students'] = [];
                courses[courseName]['capacity'] = 0;
            } courses[courseName].capacity += Number(capacity);
        } else if (line.includes('with email')) {
            let [username, email, courseName] = line.split(' with email ').join(', ').split(' joins ').join(', ').split(', ');
            let [userName, userCredit] = username.split('[').join(', ').split(']').join('').split(', ')
            if (courses.hasOwnProperty(courseName)
                && courses[courseName]['capacity'] !== 0) {
                courses[courseName]['students'].push([userName, email, userCredit]);
                courses[courseName]['capacity'] -= 1;
            }
        }
    })

    Object.entries(courses)
        .sort(([courseA, capStudA], [courseB, capStudB]) => {
            let [studentsA, capacityA] = Object.values(capStudA);
            let [studentsB, capacityB] = Object.values(capStudB);
            return studentsB.length - studentsA.length || capacityA - capacityB;
        })
        .forEach((element) => {
            let [courseName, courseDetails] = Object.values(element);
            let [students, capacity] = Object.values(courseDetails);
            students.sort((a, b) => b[2] - a[2]);
            console.log(`${courseName}: ${capacity} places left`);
            students.forEach(([username, email, credit]) => console.log(`---${credit}: ${username}, ${email}`));
        })
}

softUniStudents(['JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'])