const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !==  ${expected}`);
  }

};

const findKeyByValue = function(objects,values) {

for (var item in objects) {
  if(objects[item]=== values){
    console.log(item);
  }
}
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"

};
findKeyByValue(bestTVShowsByGenre, "The Wire");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
