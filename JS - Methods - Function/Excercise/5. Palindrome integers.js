function palindromeInt(array){

    for(i = 0; i < array.length; i++){
        let currentInt = +array[i];
        let int2String = currentInt.toString().split('').reverse().join('');
        int2String = Number(int2String);
        if(currentInt === int2String){
            console.log(true);
        } else{
            console.log(false);
        }
    }
    console.log('*********************');
}

palindromeInt([123,323,421,121]);
palindromeInt([32,2,232,1010]);


// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
 
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
 
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
    
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
 
