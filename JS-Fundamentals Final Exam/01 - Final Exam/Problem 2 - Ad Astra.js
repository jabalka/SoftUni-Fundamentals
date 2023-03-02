function astraAd(input) {

    const regex = /([|#])(?<food>[A-Za-z\s]*)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)/mg;
    let foods = {};
    const kcalDay = 2000;
    let totalCalories = 0;
    let matches = input.match(regex)
    for (let each of matches) {
        let [food, date, calories] = each.slice(1).split(each[0]);
        calories = Number(calories);
        foods[food] = {
            exp: date,
            kcal: calories
        }
        totalCalories += calories;
    }
    console.log(`You have food to last you for: ${(Math.floor(totalCalories / kcalDay))} days!`);
    Object.entries(foods).forEach(([food, details]) => {
        let [date, kcal] = Object.values(details);
        console.log(`Item: ${food}, Best before: ${date}, Nutrition: ${kcal}`);
    })
}
// astraAd(
//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|')

astraAd('$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|')