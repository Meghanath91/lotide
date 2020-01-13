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
};

const without = function(array,itemToRemove) {
  let newArray= array;
  
  for(element of itemToRemove) {
    for (index in array) {
      if (array[index] === element) {
        newArray.splice(index, 1);
      }
    }
  
  }
  return newArray;
}
 
assertArrayEqual(without([1,2,3,4],[2,3]),[1,4]);
