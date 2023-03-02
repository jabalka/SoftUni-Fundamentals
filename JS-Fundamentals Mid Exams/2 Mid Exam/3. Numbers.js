// find the top 5 numbers greater than the avarage value (sorted in descending order)

// print numbers in single line separated by space

// if less than 5 numbers hold the property mentionedm print less than 5 numbers

// if no numbers hold the property print "NO"
function numbersPrinter(input) {

    let avarage = (input.split(' ').map(Number).reduce((a, b) => a + b, 0)) / input.split(' ').length
    let numbers = input.split(' ').map(Number).filter((x) => x > avarage).sort((a, b) => b - a).slice(0, 5)

    numbers.length < 1 ? console.log('No') : console.log(numbers.join(' '));
    // if(numbers.length < 1){
    //     console.log('No');
    // } else {
    //     console.log(numbers.join(' '));
    // }
}

numbersPrinter('10 20 30 40 50')
numbersPrinter('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbersPrinter('1')
numbersPrinter('-1 -2 -3 -4 -5 -6')