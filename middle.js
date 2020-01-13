
const middle = function(array) {
 
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let middleIndex = array.length / 2;
    let middle = [array[middleIndex - 1],array[middleIndex]];
    console.log(middle);
    return middle;
  } else if (array.length % 2 === 1) {
    let middleIndex = Math.floor(array.length / 2);
    let middle = [array[middleIndex]];
    console.log(middle);
    return middle;
  }
  
};
module.exports = middle;