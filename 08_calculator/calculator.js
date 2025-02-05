const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let diff = a - b;
  return diff;
};

const sum = function (a) {
  let sum = 0;
  if (a.length === 0) return 0;
  for (const x of a) {
    sum += x;
  }
  return sum;
};

const multiply = function (...args) {
  if (Array.isArray(args[0])) args = args[0];
  if (args.length === 0) return 0;
  let product = args.reduce((total, value) => total * value, 1);
  return product;
};

const power = function (base, exponent) {
  let product = base;
  for (i = 1; i < exponent; i++) {
    product *= base;
  }
  return product;
};

const factorial = function (num) {
  if (num === 0) return 1;
  if (num < 0) return 'Error';
  let result = num;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
