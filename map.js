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


const map = function(array,callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const kings = ["soloman"];
const results2 = map(kings, king => king + " of world");
const numbers = [1,2,3,4];
const results3 = map(numbers, multiple => multiple * 5);
assertArrayEqual(results1,[ "g", "c", "t", "m", "t"]);
assertArrayEqual((results2),["soloman of world"]);
assertArrayEqual((results3),[ 5, 10, 15, 20]);