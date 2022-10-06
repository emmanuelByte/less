var names = ['tolu', 'tade', 'tola', 'ade'];
var names2 = ['bolu', 'tunde'];
// Normal looping with array
// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// for (var p in names) {
//   console.log(names[p]);
// }
// for (var value of names) {
//   console.log(value);
// }
// looping with array methods

names.forEach(function (value, index) {
  console.log(value, index);
});
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var squaredNumbers = numbers.map(function (value, index) {
  return value * value;
});
console.log(squaredNumbers);
