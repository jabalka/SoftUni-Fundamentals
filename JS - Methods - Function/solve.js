// function numberPower(number, power){
//     const result = number ** power;
//     console.log(result);
// }
// numberPower(3, 4)




// Cube function with function receives a function defined by a function expression and 
// executes it for every element of the array received as a second argument:
function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const f = function (x) {
    return x * x * x;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cube = map(f, numbers);
  console.log(cube);