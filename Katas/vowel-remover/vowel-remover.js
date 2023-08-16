function shortcut(string) {
  let arr = [];
  for (let x = 0; x < string.length; x++) {
    let char = string[x];
    if (char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u") {
      arr.push(char);
    }
  }
  return arr.join('');
}

console.log(shortcut('how are you today?'));