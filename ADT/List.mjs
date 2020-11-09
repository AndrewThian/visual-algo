/**
 * Implementation of a list ADT
 * with an array as the concrete data structure
 */

class List {
  constructor(...args) {
    this.arr = args;
  }

  get(i) {
    /**
     * Time complexity: O(1)
     */
    return arr[i];
  }

  search(v) {
    /**
     * In the best case, v is found at the first position, O(1).
     * In the worst case, v is not found in the list and we require O(N) scan to determine that.
     */
    let result;
    for (let i = 0; i < this.arr.length; i++) {
      result = arr[i] === v;
    }
  }

  insert(i, v) {
    /**
     * In the best case, insert at i = N, there is no shifting of element, O(1).
     * In the worst case, insert at i = 0, we shift all N elements, O(N).
     */
    this.arr.splice(i, 0, v);
  }

  remove(i) {
    /**
     * In the best case, remove at i = N-1, there is no shifting of element, O(1).
     * In the worst case, remove at i = 0, we shift all N elements, O(N).
     */
    this.arr.splice(i, 1);
  }
}

export { List };
