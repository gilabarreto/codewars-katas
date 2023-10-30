function longest(s1, s2) {
  let sortedArr = s1.concat(s2).split("").sort();
  let result = "";

  for (let x = 0; x < sortedArr.length; x++) {
    if (!result.includes(sortedArr[x])) {
      result += sortedArr[x]
    }
  }
  return result;
}