import { randomArray } from "../utils/randomArray.mjs";

// iterative
function iterativeBinarySearch(arr, item) {
  let min = 0;
  let max = arr.length - 1;
  let mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (arr[mid] === item) return mid;
    if (arr[mid] < item) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
}

function recursiveBinarySearch(arr, item) {
  let mid = Math.floor(arr.length / 2);
  // cannot find item
  if (arr.length === 1 && arr[0] !== item) return false;
  // success case
  if (arr[mid] === item) return mid;
  if (arr[mid] < item) {
    // slice right side of array
    return recursiveBinarySearch(arr.slice(mid + 1), item);
  } else {
    // slice left side of array
    return recursiveBinarySearch(arr.slice(0, mid), item);
  }
}

const makeBinarySearch = (type) =>
  type === "iterative" ? iterativeBinarySearch : recursiveBinarySearch;

const inputArr = [1, 2, 4, 5, 7, 8, 9];

const binarySearch = makeBinarySearch("recursive");

const index = binarySearch(inputArr, 5);

console.log({ index });
