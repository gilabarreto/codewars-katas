function duplicateCount(text) {
  let charCount = {};
  let count = 0;

  text.toLowerCase().split("").forEach((letter) => {
    if (charCount[letter]) {
      charCount[letter]++;
      if (charCount[letter] === 2) {
        count++;
      }
    } else {
      charCount[letter] = 1;
    }
  });

  return count;
}