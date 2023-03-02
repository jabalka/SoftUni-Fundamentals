function sorting(inputArray) {

    inputArray.sort((a, b) => {
        return a.length - b.length !== 0
        ? a.length - b.length
        : a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
    }).forEach((x) => console.log(x));
}

sorting(["alpha", "beta", "gamma"])
sorting(["Isacc", "Theodor", "Jack", "Harrison", "George"])




// function foo(arr) {
//     return arr
//         .sort((x, y) => {
//             return x.length - y.length !== 0
//                 ? x.length - y.length
//                 : x.toLocaleLowerCase().localeCompare(y.toLocaleLowerCase());
//         })
//         .forEach((x) => console.log(x));
// }

// foo(["alpha", "beta", "gamma"])
// foo(["Isacc", "Theodor", "Jack", "Harrison", "George"])