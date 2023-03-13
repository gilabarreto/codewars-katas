function fakeBin(x) {
  result = [];
  arr = x.split("");
  arr.map(number => {
    if (number < 5) { result += "0" }
    else { result += "1" }
  })
  return result
}

fakeBin("45385593107843568")