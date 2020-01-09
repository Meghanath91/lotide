const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !==  ${expected}`);
  }
};

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
  let arrA = Object.keys(objA);
  let arrB = Object.keys(objB);
  if (arrA.length !== arrB.length) {
    return false;
  } else {
    for (let item of arrA) {
      
      if (Array.isArray(objA[item]) && Array.isArray(objB[item])) {
        return (eqArrays(objA[item],objB[item]));
      } else if (objA[item] !== objB[item]) {
        console.log(objA[item], objB[item]);
        return false;
      }
    }
    return true;
  }
};
 

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);// => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false
//assertEqual (eqArrays([1,2],[1,2,3]),false)