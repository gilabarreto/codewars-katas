function sumTwoSmallestNumbers(numbers) {  
  const sortNumbers = numbers.sort((a, b) => a - b);
  const result = sortNumbers[0] + sortNumbers[1];
  return result
}