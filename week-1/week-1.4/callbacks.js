// one function calling another function
function square(n) {
  return n * n;
}

function sumOfSquares(num1, num2) {
  const square1 = square(num1);
  const square2 = square(num2);

  const sumOfSquares = square1 + square2;

  return sumOfSquares;
}

const squareSum = sumOfSquares(1, 2);
console.log(`Sum of squares of 1 & 2 : ${squareSum}`);

// callback function
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSomething(num1, num2, fn) {
  console.log(fn);
  const val1 = fn(num1);
  const val2 = fn(num2);

  const sum = val1 + val2;
  return sum;
}

const sum = sumOfSomething(2, 2, cube); // passing function as an argument
console.log(sum);

// anonymous function as callback
function sumOfSomething1(num1, num2, callback) {
  console.log(callback);
  const val1 = callback(num1);
  const val2 = callback(num2);

  const sum = val1 + val2;
  return sum;
}

const sum1 = sumOfSomething1(1, 2, function (n) {
  return n * n * n * n;
});
console.log(sum1);
