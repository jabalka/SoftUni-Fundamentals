function commonElements(array1, array2) {

// excercise solution --  with (for-of) cycle
    // for( const element of array1){
    //     let isCommon = array2.includes(element);
    //     if (isCommon){
    //         console.log(element);
    //     }
    // }
//  my solution -----     with (for) cycle----------
    for (let i = 0; i < array1.length; i++) {

        let char1 = array1[i];
        if (array2.includes(char1)) {
            console.log(char1);
        }
    }
    console.log(`********END*******`);
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);