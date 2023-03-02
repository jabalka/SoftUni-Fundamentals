function phoneNumber(input) {

    let pattern = /\+359(?<one>[ -])2\1[1-9]{3}\1[1-9]{4}\b/g;
    let validPhones = [];
    let phone;

    while ((phone = pattern.exec(input)) != null) {
        validPhones.push(phone[0])
    }

    console.log(validPhones.join(', '));


}

phoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")