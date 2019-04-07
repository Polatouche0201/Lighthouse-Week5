
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if(fromN === toN) {
    return fromN;
  } else {
    if((fromN + 1) === toN) {
      return fromN + toN;
    } else {
      return fromN + toN + sum(fromN + 1,toN - 1);
    }
  }
}

module.exports = sum;