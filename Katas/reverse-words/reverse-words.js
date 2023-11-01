function reverseWords(str) {
  let words = str.split(' ');
  let reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });
  return reversedWords.join(' ');
}