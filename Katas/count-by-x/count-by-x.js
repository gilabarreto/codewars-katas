function countBy(x, n) {
  let z = [];
  
  for (let y = 1; y <= x * n; y++) {
    if (y % x === 0) {
      z.push(y)
    }
  }

  return z;
}