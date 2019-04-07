function sumItems(array) {
  // Sum all the numbers in the array
  if(array.length > 0) {
    let element = array.shift();
    if(Array.isArray(element)) {
      return sumItems(element) + sumItems(array);
    } else {
      return element + sumItems(array);
    }
  } else {
    return 0;
  }
}

module.exports = sumItems;