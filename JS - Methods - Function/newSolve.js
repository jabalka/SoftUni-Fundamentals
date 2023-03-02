// Pavel's task (refactoring)
// Write a JS program that modifies a number until the average value of all it's digits is higher than 5.
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
/**
 * Algorithm part:
 */
 
// Global data (using the scope)
this.ERROR_MESSAGE = '<<< Invalid data! >>>'
this.MAX_NUMBER_OF_DIGITS = 6;
this.AVERAGE_MAX_VALUE = 5;
this.SUFFIX_VALUE = 9;
this.xAsArray = undefined;
 
const transformNumberToArray = (x) => this.xAsArray = Array.from(x.toString()).map(Number);
const valueIsReady = () => this.xAsArray.reduce((acc, x) => (acc += x)) / this.xAsArray.length > this.AVERAGE_MAX_VALUE;
const complete = () => Number(this.xAsArray.join(''));
 
const process = (x) => {
  // With invalid data the function stops execution due to the thrown error:
  if (typeof x !== typeof Number() || x.toString().length > this.MAX_NUMBER_OF_DIGITS) throw new TypeError(this.ERROR_MESSAGE);
 
  // With valid data, execute the algorithms:
  transformNumberToArray(x);
 
  // Processed;
  while (true) {
    if (valueIsReady()) return complete();
    this.xAsArray.push(this.SUFFIX_VALUE);
  }
};
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
/**
 * Testing part:
 */
 
// Mock data (testing purposes)
const mock = [101, 144, 5835, 14221, 202022];
console.log(mock.map(process).map((x, i) => `${mock[i]} -> ${x}`).join('\n'));
 
// Expected results:
// 101 -> 1019999
// 144 -> 14499
// 5835 -> 5835
// 14221 -> 142219999
// 202022 -> 202022999999