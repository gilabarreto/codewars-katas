function removeEveryOther(arr) {
  let result = [];
  for (let x = 0; x < arr.length; x += 2) {
    result.push(arr[x])
  }
  return result;
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));