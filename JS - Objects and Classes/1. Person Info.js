function info(firstName, lastName, age) {

    let object = {}
    object.firstName = firstName,
        object.lastName = lastName,
        object.age = age

    return object;
}

console.log(info("Peter",
    "Pan",
    "20"
));