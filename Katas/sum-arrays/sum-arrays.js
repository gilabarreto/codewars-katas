function sum(numbers) {
  let result = 0;
  for (let x = 0; x < numbers.length; x++) {
    result += numbers[x];
  }
  return result;
}