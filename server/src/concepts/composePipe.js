import { compose, pipe } from 'ramda';

const add4 = (x) => x + 4;
const multiplyBy3 = (x) => x * 3;
const minus2 = (x) => x - 2;

// THREE WAYS TO CHAIN TOGETHER
// Approach 1: Nest function execution

const result = minus2(multiplyBy3(add4(1))); // returns 13

/* Function evaluates inside out
    returns 13 <== 15 <= 5 <= 1 is passed in.
*/

// Approach 2: Use compose to define a new function

const myComposeFn = compose(minus2, multiplyBy3, add4);
const result = myComposeFn(1); // returns 13

/* Function evaluates right to left.
    returns 13 <== 15 <= 5 <= 1 is passed in.
*/

// Approach: Use pipe to define a new function.

const myPipeFn = pipe(add4, multiplyBy3, minus2);
const result = myPipeFn(1); // returns 13

/* Function evaluates left to right.
    1 is passed in => 5 => 15 ==> returns 13.
*/
