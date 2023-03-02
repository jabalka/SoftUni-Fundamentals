function cutReverse(str) {

    let firstHalf = str.substring(0, str.length / 2).split('').reverse().join('');
    let secondHalf = str.substring(str.length / 2).split('').reverse().join('');
    console.log(`${firstHalf} \n${secondHalf}`)
}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');