function digPow(n, p) {
// let number = Array.from(String(n));
  let number = n.toString().split("")
  let result = 0;

  for (let x = 0, y = p; x < number.length; x++, y++) {
    result += Math.pow(number[x], y);
  }
  if (result % n !== 0) {
    return -1
  }
  return result / n
}