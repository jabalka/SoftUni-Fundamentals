function isPrimeNumber(input){
    
    let number = +input;

    let isPrime = (x) => {
        for (let i = 2; i < x; i++) {
          if (x % i === 0) {
            return false;
          }
        }
        return true;
      };

      if(isPrime(number)){
        console.log(`true`);
      } else {
        console.log(`false`);
      }


}
isPrimeNumber(7)

isPrimeNumber(8)

isPrimeNumber(81)