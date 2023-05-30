String.prototype.toJadenCase = function () {
  let result = []
  
  let newString = this.split(" ");

  for (let x = 0; x < newString.length; x++) {
    result.push(newString[x].charAt(0).toUpperCase() + newString[x].slice(1))
  }
  return result.join(" ")
}

let test = "How can mirrors be real if our eyes aren't real"

console.log(test.toJadenCase())

// String.prototype.toJadenCase = function () { 
//   return this.split(" ").map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join(" ");
// }