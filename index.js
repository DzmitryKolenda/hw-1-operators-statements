/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return sum of two numbers
const sum = (a, b) => {
  return a + b;
};

/**
 * @param {number} num
 * @return {boolean}
 */
// function should return true if number is even or false is number is not even
const isNumberEven = (num) => {
  return num % 2 === 0;
};

/**
 * @param {number} num1
 * @param {number} num2
 * @return {string}
 */
// Write logic to compare two numbers and return which number is greater or they are equal
// If num1 is greater than num2 return string 'num1 is the largest number'
// if num2 is greater than num1 return string 'num2 is the largest number'
// if num1 is equal to num2 return string 'num1 is equal to num2'
const findLargestNumber = (num1, num2) => {
  let message = '';
  if (num1 > num2) {message = num1 + ' is the largest number'};
  if (num1 < num2) {message = num2 + ' is the largest number'};
  if (num1 == num2) {message = num1 + ' is equal to ' + num2};
  return message;
};

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {string}
 */
// function should return type of triangle
// if triangle is equilateral return string 'Equilateral triangle'
// if triangle is Scalene return string 'Scalene triangle'
// if triangle is Isosceles return string 'Isosceles triangle'
const findTriangleType = (side1, side2, side3) => {
  let message = ``;
  if (side1 == side2 && side2 == side3) {message = 'Equilateral triangle'};
  if (side1 != side2 && side2 != side3 && side1 != side3) {message = 'Scalene triangle'};
  if ((side1 == side2 && side2 != side3) || (side2 == side3 && side1 != side2) || (side1 == side3 && side1 != side3)) {message = 'Isosceles triangle'};
  return message;
};

/**
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
// function should return amount of days in month with string 'The Month has X days'
// If wrong month number provided return string 'Invalid Month of value X'
const findDaysInMonth = (month, year) => {
  let message = '';
  if (month > 12) {message = 'Invalid Month of value ' + month}
  else {message = 'The Month has ' + new Date(year, month, 0).getDate() + ' days'};
  return message;
};

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number | string}
 */
// function should return result of operation of num1 and num2 based on operation parameter.
// If operation is invalid return string 'Invalid operation'
const calculateResult = (num1, num2, operation) => {
  let message = '';
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
    case 'modulus':
      return Math.trunc(num1 / num2);
    default:
      return message = operation + ' is an invalid operation';
  }
};

/**
 * @return {string}
 */
// Create multiply table multiplying all digits from 2 t0 9 on 1 - 10 and write result in string
// Compare your result with string in test
const getMultiplicationTable = () => {
let message = ``;
let message1 = ``;
let message2 = ``;

for (let i = 2; i < 10; i++) {
  message = message + `==== ${i} ==== \n`;
  
  for (let j = 1; j <= 10; j++) {
    message = message + `${i} * ${j} = ${i * j} \n`;
    
  }
  
}

return message;
};

module.exports = {
  isNumberEven,
  findLargestNumber,
  findTriangleType,
  findDaysInMonth,
  sum,
  calculateResult,
  getMultiplicationTable,
};
