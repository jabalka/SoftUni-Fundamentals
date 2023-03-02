function makingDictionary(inputArray) {

    let dictionary = {};
    inputArray.forEach(line => {
        let [term, def] = Object.entries(JSON.parse(line))[0]
        dictionary[term] = def
        
    })
console.log(dictionary)
    Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(x => console.log(`Term: ${x[0]} => Definition: ${x[1]}`));



    // let dictionary = {};
    // inputArray.forEach(element => {
    //     element = JSON.parse(element);
    //     let tuple = Object.entries(element);
    //     let term = tuple[0][0];
    //     let definition = tuple[0][1];
    //     dictionary[term] = definition;
    // });

    // Object.entries(dictionary)
    // .sort((a, b) => a[0].localeCompare(b[0]))
    // .forEach( e => {
    //     console.log(`Term: ${e[0]} => Definition: ${e[1]}`);
    // })




    
    //  more detailed with push the result into Array -------------------

        // let dictionary = [];
    //     for(const line of inputArray){
    //         let obj = JSON.parse(line);
    //         let arr = Object.entries(obj);
    //         let [term, def] = arr[0];
    //         let wordInDict = {
    //             term,
    //             def
    //         }
    //         dictionary.push(wordInDict);
    //     }
    //     dictionary
    //     .sort((a, b) => a.term.localeCompare(b.term))
    //     .forEach(x => console.log(`Term: ${x.term} => Definition: ${x.def}`));       
}

makingDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Coffee":"The coffee is good!"}'
]
)

