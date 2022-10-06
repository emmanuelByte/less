// var age = 'emmNUEL';
// console.log(age);
// var global = function () {
//   console.log('this is a global');
//   var local = function () {
//     age = 'New age';
//     console.log(age);
//     console.log('This is a local fn');
//     function innerLocal() {
//       age = 'west Name';

//       console.log('This is inside the local fn');
//     }
//     innerLocal();
//   };
//   local();
// };
// global();
// console.log(age);
// program to print 10 number
// var value = 0;
// while (value <= 10) {
//   console.log('Current Value', value);
//   console.log('Current Value', value);
//   value--;
// }
// for (var value = 0.999; value >= 0; value = value - 0.1) {
//   console.log('Current value', value);
// }
function printSum(sum) {
  console.log(sum(4, 5));
}
function ggg(a, b) {
  return a + b;
}
printSum(ggg);
