function passwordGenerator([str1, str2, word]) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let concStrngs = str1 + str2;
    concStrngs = concStrngs.split('')
    let index = 0;
    word = word.toUpperCase()

    for (let i = 0; i < concStrngs.length; i++) {
        if (vowels.includes(concStrngs[i])) {
            concStrngs.splice(i, 1, word[index]);
            index++;
        }
        if (index > word.length - 1) {
            index = 0;
        }
    }
    console.log(`Your generated password is \n${concStrngs.reverse().join('')}`)
}

passwordGenerator(['ilovepizza', 'ihatevegetables',
    'orange'])

passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])

passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'])