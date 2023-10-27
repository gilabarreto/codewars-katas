function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const rot13Alphabet = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  
  return message.replace(/[a-zA-Z]/g, (char) => {
    const index = alphabet.indexOf(char);
    return rot13Alphabet[index];
  });
}