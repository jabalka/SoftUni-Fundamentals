function hardWords([str, arr]) {

    str = str.split(' ');
    str.forEach((word) => {
        if (word.includes('_')) {
            let charCount = 0;
            for (let char of word) {
                if (char === '_') {
                    charCount++;
                }
            }
            for (let each of arr) {
                if (each.length == charCount) {
                    let index = str.indexOf(word);
                    str.splice(index, 1, each);
                    break;
                }
            }
        }
    })
    console.log(str.join(' '));
}

hardWords([`Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, 
so _______ things happened. My dad bought me a sled. Mom started a new job 
as a __________. My brother\'s ankle is ________, and now it bothers me even more. 
Every night Mom cooks ___ on your recipe because it is the most delicious. 
I hope this year Santa will _____ me a robot.`,
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)