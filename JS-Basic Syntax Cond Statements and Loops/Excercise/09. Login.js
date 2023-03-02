function login(input){

    let index = 0;
    let username = input[index];
    index++
    let password = input[index];
    let passwordAround = ""
    let counter = 0;
    
    for (let x = username.length - 1; x >= 0; x--){
        let symbolPass = username[x]
        passwordAround += symbolPass
    }

    while(password !== passwordAround){
        counter++; 
        index++;
        password = input[index];

        if(counter >= 4){
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
    }
    if (password == passwordAround){
        console.log(`User ${username} logged in.`);
    }
}

login(['Acer','login','go','let me in','recA']);

login(['sunny','rainy','cloudy','sunny','not sunny']);