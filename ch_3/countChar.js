function countChar(value, char) {
  let charCounter = 0;
  for (let i = 0; i < value.length; i ++) {
    if (value[i] === char) {
      charCounter ++;
    }
  }
  return charCounter;
}

console.log(countChar('Armando Serna Gutiérrez', 'a'));
