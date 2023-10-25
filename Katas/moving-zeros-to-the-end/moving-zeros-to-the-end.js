function moveZeros(arr) {
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }

  return arr1.concat(arr2);
}

// function moveZeros(arr) {
//   const nonZeroElements = arr.filter(element => element !== 0);
//   const zeroElements = arr.filter(element => element === 0);
//   return nonZeroElements.concat(zeroElements);
// }