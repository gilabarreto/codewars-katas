var number = function (array) {
  let newArr = []
  for (let x = 0; x < array.length; x++) {
    newArr.push(`${x + 1}: ${array[x]}`)
  }
  return newArr
}

// var number = function(array) {
//   return array.map(function (line, index) {
//     return `${index + 1}: ${line}`;
//   });
// }
// console.log(number(["a", "b", "c"]))