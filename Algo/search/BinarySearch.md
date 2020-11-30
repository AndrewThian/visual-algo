# Notes

- Binary search assumes the input data structure has to be sorted.
- It's part of the divide and conquer algo design paradigm

# Time complexity (iterative + recursive)

- Best case would be O(1) because if the mid point matches
- Worse case would be O(logN) because the size of the array reduces at every iteration

# Space complexity (iterative)

- O(1) space complexity as it only requires 3 pointers to the elements

# Space complexity (recusive)

- O(logN) because running a recursive function adds the items on to the call stack which increases according to the number of times the function is called
