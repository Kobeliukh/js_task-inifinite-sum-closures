'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (typeof number === 'number') {
      sum += number;

      return adder;
    } else {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
