function loadingBar(num){

    let progress = '[';
    let belowProgress = 'Still loading...'

    for(let i = 10; i <= num; i += 10){
        progress += '%';
        if(i === 100){
            progress = 'Completed';
            belowProgress = '[%%%%%%%%%%]'
            break;
        } else if(i === num){
            let remains = (100 - i) / 10;
            let remainDots = '.'
            let finalDots = remainDots.repeat(remains)
            progress += finalDots + ']';
            break;
        }
    }
    console.log(`${num}% ${progress} \n    ${belowProgress}`);
}

loadingBar(30)

loadingBar(50)

loadingBar(100)