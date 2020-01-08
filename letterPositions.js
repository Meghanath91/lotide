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
  if (eqArrays(actual,expected)===true) {
    console.log(`✅Assertion Passed:  ${actual}   ===  ${expected}`);
  } else if (eqArrays(actual,expected)=== false){
    console.log(`🛑Assertion Failed: ${actual} !==  ${expected}`);
   
  }
}

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0;i<sentence.length;i++) {
    if(sentence[i]!==" "){
      if(result[sentence[i]]){
        result[sentence[i]].push(i);
      }
        else{
          result[sentence[i]]=[];
          result[sentence[i]].push(i);
        }

      }
  }
  
  console.log(result);
  return result;
};
const result1 = letterPositions("hello");
assertArrayEqual(result1["h"],[ 0 ]);
assertArrayEqual(result1["e"],[ 1]);
assertArrayEqual(result1["l"],[ 2, 3 ]);
assertArrayEqual(result1["o"],[ 4])