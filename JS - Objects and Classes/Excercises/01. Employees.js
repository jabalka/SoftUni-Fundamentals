function employeesData(inputArray) {
    //          solved with class and shortened *best code*

    class Person {
        constructor(name) {
            this.name = name,
                this.number = name.length
        }
        print() {
            return `Name: ${this.name} -- Personal Number: ${this.number}`
        }
    }
    inputArray = inputArray.map(x => new Person(x))
        .forEach(obj => {
            console.log(obj.print());
        });
// or it can be just like that, as the input should comes into 'console.log(input)'
    // return inputArray.map(x => {
    //     let obj = new Person(x);
    //     return obj.print()
    // }).join('\n');

    // -------------------------------------------------
    // ------------------------------------
    //      with object ----------------

    // let employees = {};
    // for (const line of inputArray) {
    //     employees[line] = line.length;
    // }

    // Object.entries(employees).forEach(elemenet => {
    //     console.log(`Name: ${elemenet[0]} -- Personal Number: ${elemenet[1]}`);
    // })
    // ------------------------------------
    //     created object to each iteration of the array in elements--------

    // let employees = [];

    // inputArray.forEach(element => {
    //     let person = {
    //         name: element,
    //         number: element.length
    //     }
    //     employees.push(person)
    // })
    // employees.forEach(obj => {
    //     console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
    // })
    // --------------------------------------------------------
    ///         my first solved included object and class as well as cycles-----
    // class Person {
    //     constructor(firstName, lastName, persNum) {
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.persNum = persNum
    //     }
    // }
    // let employeesArray = [];


    // for (let persona of inputArray) {
    //     let splittedNames = persona.split(' ');
    //     let personNumber = 0;
    //     for (let i = 0; i < persona.length; i++) {
    //         personNumber++
    //     }
    //     let [fName, lName] = splittedNames;
    //     let perNum = personNumber;
    //     let person = new Person(fName, lName, perNum);
    //     employeesArray.push(person);
    // }

    // employeesArray.forEach((i) =>
    //     console.log(`Name: ${i.firstName
    //         } ${i.lastName
    //         } -- Personal Number: ${i.persNum
    //         }`));

}
employeesData([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)



