// const eqArrays = function(actual, expected) {
//   if (actual.length !== expected.length) {
//     return false;
//   } else {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };
// const assertArrayEqual = function(actual, expected) {
//   if (eqArrays(actual,expected)===true) {
//     console.log(`✅Assertion Passed:  ${actual}   ===  ${expected}`);
//   } else if (eqArrays(actual,expected)=== false){
//     console.log(`🛑Assertion Failed: ${actual} !==  ${expected}`);
   
//   }
// };

const flatten = function (array) {
  let result=[];

  for(item of array){
    if(Array.isArray(item)){
      for(element of item) {
        result.push(element);

      }
    } else {
      result.push(item);
    }
    
  }
  return result;

};

console.log(flatten([1,2,3,[4,5]]));
