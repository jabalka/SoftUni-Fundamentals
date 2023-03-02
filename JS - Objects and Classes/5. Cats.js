function cats(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let string of input) {
        let toString = string.split(' ');
        let [name, age] = toString;
        let cat = new Cat(name, age);
        cat.meow()
    }

}

cats(['Mellow 2', 'Tom 5'])