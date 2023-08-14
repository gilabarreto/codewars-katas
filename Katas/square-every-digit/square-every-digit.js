function squareDigits(num) {
  let numArr = Array.from(String(num), Number);
  let result = '';
  
  for (let x = 0; x < numArr.length; x++) {
    let squaredDigit = Math.pow(numArr[x], 2);
    result += squaredDigit;
  }
  
  return parseInt(result);
}

console.log(squareDigits(3212));