function companyUsers(input) {

    const company = {};

    input.forEach((line) => {
        const [compName, user] = line.split(' -> ');
        if (!company.hasOwnProperty(compName)) {
            company[compName] = [];
        }
        if (!company[compName].includes(user))
            company[compName].push(user);
    })
    sorted = Object.entries(company).sort((a, b) => a[0].localeCompare(b[0]))
    sorted.forEach((element) => {
        let [comp, people] = element;
        people = people.sort((a, b) => a.localeCompare(b))
        console.log(comp);
        for (let person of people) {
            console.log(`--${person}`)
        }
    })
    console.log(`********END*******`);
}

companyUsers([
    'SoftUni -> CB12345',
    'SoftUni -> BB12345',
    'SoftUni -> AA12345',
    'Microsoft -> CC12345',
    'HP -> BB12345',
    'Microsoft -> CC12345'
])

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])