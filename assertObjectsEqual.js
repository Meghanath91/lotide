const eqArrays = function(arryA, arryB) {
  if (arryA.length !== arryB.length) {
    return false;
  } else {
    for (let i = 0; i < arryA.length; i++) {
      if (arryA[i] !== arryB[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(objA,objB) {
  let arrA = Object.keys(objA) ;
  let arrB = Object.keys(objB) ;
  if(arrA.length !== arrB.length) {
    return false;
  }
   else {
    for (let item of arrA){
      
      if (Array.isArray(objA[item]) && Array.isArray(objB[item])) {
        return (eqArrays(objA[item],objB[item]))
      } else if (objA[item] !== objB[item]) {
        console.log(objA[item], objB[item]);
        return false;
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
    if (eqObjects(actual,expected)===true) {
      console.log(`✅Assertion Passed:  ${inspect(actual)}   ===  ${inspect(expected)}`);
    } else if (eqObjects(actual,expected)=== false){
      console.log(`🛑Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
     
    }
  }
  assertObjectsEqual({p:3,q:2},{p:3,q:2})