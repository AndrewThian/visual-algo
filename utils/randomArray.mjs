function randomArray(size, maxNumber = 10) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * Math.floor(maxNumber)));
  }
  return arr;
}

export { randomArray };
