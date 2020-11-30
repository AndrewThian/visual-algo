function sort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIdx = i;
    let temp;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }

  return arr;
}

// const x = [14, 33, 27, 10, 35, 19, 42, 44];
const x = [14, 33, 27, 10, 35, 44, 19, 42, 44];

const result = sort(x);

console.log({ result });
