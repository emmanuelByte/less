function getFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else {
    return number;
  }
}
var numbers = [];
// console.log(numbers);
// generate numbers from 1 to 1000
for (var i = 1; i <= 1000; i = i + 1) {
  numbers.push(i);
}
// console.log(numbers);
var fizzBuzzes = numbers.map(function (value) {
  return getFizzBuzz(value);
});
console.log(fizzBuzzes);
// Generate 100 random numbers between 1 to 1024
