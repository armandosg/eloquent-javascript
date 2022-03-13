function range(start, end, step = 1) {
  let compare = (i, end) => i <= end;
  if (step == 0) return undefined;
  else if (step < 0) {
    let temp = start;
    start = end;
    end = temp;
    compare = (i, end) => i >= end;
  }
  let array = [];
  for (let i = start; compare(i, end); i += step) {
    array.push(i);
  }
  return array;
}

function sum(elements) {
  let sum = 0;
  for (let element of elements) {
    sum += element;
  }
  return sum;
}

console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));
console.log(range(1, 10, -1));
