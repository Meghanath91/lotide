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
const middle = function(array) {
 
  if(array.length === 1 || array.length === 2 ) {
    return [];
  }
  else if(array.length%2===0) {
    let middleIndex = array.length/2;
    let middle = [array[middleIndex-1],array[middleIndex]] ;
    console.log(middle);
    return middle;
  }
  else if(array.length %2===1) {
    middleIndex = Math.floor(array.length/2);
    let middle = [array[middleIndex]];
    console.log(middle);
    return middle;
  }
  
};
assertArrayEqual( middle([1,2,3,4]),[2,3]);
assertArrayEqual(middle([1,2,3,4,5]),[3]);
assertArrayEqual(middle([1,2]),[]);
assertArrayEqual(middle([3]),[]);

