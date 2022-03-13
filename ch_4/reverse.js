function reverseArray(array) {
  let result = [];
  for (let element of array) {
    result.unshift(element);
  }
  return result;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length / 2; i ++) {
    let temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
}

console.log(reverseArray([1, 2, 3, 4, 5]));
let array = [1, 2, 3, 4, 5]
reverseArrayInPlace(array);
console.log(array);
