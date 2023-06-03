function accum(s) {
  let result = [];
  
  for (let x = 0; x < s.length; x++) {
    let repeatedChars = "";
    for (let y = 0; y < x; y++) {
      repeatedChars += s[x].toLowerCase();
    }
    let capitalizedChar = s[x].toUpperCase();
    
    result.push(capitalizedChar + repeatedChars);
  }
  
  return result.join('-');
}

// function accum(s) {
//   let result = [];
  
//   for (let x = 0; x < s.length; x++) {
//     let repeatedChars = s[x].toLowerCase().repeat(x);
//     let capitalizedChar = s[x].toUpperCase();
    
//     result.push(capitalizedChar + repeatedChars);
//   }
  
//   return result.join('-');
// }