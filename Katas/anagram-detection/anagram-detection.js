var isAnagram = function(test, original) {
  return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("")
};

// var isAnagram = function(test, original) {
//   let arr1 = test.split("").sort();
//   let arr2 = original.split("").sort();
//   return JSON.stringify(arr1) === JSON.stringify(arr2);
// };

// console.log(isAnagram("foefet", "toffee"));