const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual,expected) === true) {
    console.log(`✅Assertion Passed:  ${actual}   ===  ${expected}`);
  } else if (eqArrays(actual,expected) === false) {
    console.log(`🛑Assertion Failed: ${actual} !==  ${expected}`);
   
  }
};

const takeUntil = function(array,callBack) {
  const results = [];
  for (let item of array) {
    if (callBack(item) !== true) {
      results.push(item);
    } else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArrayEqual(results1,[ 1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArrayEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
