function order(words) {
  if (words === "") {
    return "";
  }

  const wordArray = words.split(" ");
  const result = [];

  for (let i = 1; i <= wordArray.length; i++) {
    for (const word of wordArray) {
      if (word.includes(i)) {
        result.push(word);
        break;
      }
    }
  }

  return result.join(" ");
}