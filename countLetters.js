const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !==  ${expected}`);
  }

};

const countLetters = function(str) {
  const noSpaces = str.split(" ").join("");
  let result = {};
  for (let char of noSpaces) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
    
  }
  
  // console.log(result);
  return result;
};
const finalResult = countLetters("l o l");

assertEqual(finalResult["l"],2);
assertEqual(finalResult["o"],1);