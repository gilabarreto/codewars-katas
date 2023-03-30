function strCount(str, letter) {
  let result = 0;
  for (let x = 0; x < str.length; x++) {
    if (letter === str[x]) {
      result += 1;
    }
  }
  return result;
}