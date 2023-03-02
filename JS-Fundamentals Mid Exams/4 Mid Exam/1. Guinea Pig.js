// for a month 30 days
// 300gr food per day
// every 2nd day Merry gives 5% hay
// every 3rd day Merry puts cover quantity with 1/3 of its weight
// stop if Merry runs out of food, hay, cover
function guineaPig(input){

    let pigKg = Number(input.pop()) * 1000;
    let [foodKg, hayKg, coverKg] = input.map((x) => Number(x) * 1000);
    let dayCount = 0;

    while(foodKg > 0 || hayKg > 0 || coverKg > 0){
        dayCount++
        foodKg -= 300;
        if(dayCount % 2 == 0){
            hayKg -= foodKg * 0.05;
        }
        if(dayCount % 3 == 0){
            coverKg -= (pigKg / 3);
        }
        if(dayCount == 30){
            break;
        }
    }
    if(foodKg > 0 && hayKg > 0 && coverKg > 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodKg/1000).toFixed(2)}, Hay: ${(hayKg/1000).toFixed(2)}, Cover: ${(coverKg/1000).toFixed(2)}.`);
    } else {
        console.log(`Merry must go to the pet store!`);
    }
}

guineaPig((["10", 
"5", 
"5.2", 
"1"])
)
guineaPig((["1", 
"1.5", 
"3", 
"1.5"
])
)
guineaPig((["9",
"5",
"5.2",
"1"])
)