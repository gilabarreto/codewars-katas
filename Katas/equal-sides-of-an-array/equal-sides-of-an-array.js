function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;

  // Use Reduce to Sum Array Elements
  // let rightSum = arr.reduce((acc, val) => acc + val, 0);

  for (let x = 0; x < arr.length; x++) {
    rightSum += arr[x];
  }

  for (let x = 0; x < arr.length; x++) {
    rightSum -= arr[x];
    if (leftSum === rightSum) {
      return x;
    }
    leftSum += arr[x];
  }

  return -1;
}