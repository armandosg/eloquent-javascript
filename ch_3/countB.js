function countB(value) {
  let bCounter = 0;
  for (let i = 0; i < value.length; i ++) {
    if (value[i] === 'B') {
      bCounter ++;
    }
  }
  return bCounter;
}
