/**
 * Exercise 1
 *
 * create a function "isOdd" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Not odd" if it's
 * anything else
 */

function isOdd(num) {
  if (num % 2 == 0) {
    return "Not odd";
  } else {
    return "Is odd";
  }
}

/**
 * Exercise 2
 *
 * create a function "isEven" which takes a number as a parameter
 * and return a string "Is even" if it's even or "Not even" if it's
 * anything else
 */

function isEven(num) {
  if (num % 2 == 0) {
    return "Is even";
  } else {
    return "Not even";
  }
}

/**
 * Exercise 3
 *
 * create a function "oddOrEven" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Is even" if it's even
 */

function oddOrEven(num) {
  if (num % 2 == 0) {
    return "Is even";
  } else {
    return "Is odd";
  }
}

/**
 * Exercise 4
 *
 * create function "roundedNumber" which takes a fraction as a parameter
 * and return rounded integer
 */

function roundedNumber(num) {
  return Math.round(num);
}

/**
 * Exercise 5
 *
 * create function "roundToLowerInteger" which takes a fraction as a parameter
 * and returns the largest integer less than or equal to a given number
 */

function roundToLowerInteger(num) {
  return Math.floor(num);
}

/**
 * Exercise 6
 *
 * create function "roundToLargerInteger" which takes a fraction as a parameter
 * and returns rounded number up to the next largest integer
 */
function roundToLargerInteger(num) {
  return Math.ceil(num);
}

/**
 * Exercise 7
 *
 * create function "convertToPositive" which takes a negative number as a parameter
 * and returns same number but positive
 */
function convertToPositive(num) {
  return Math.abs(num);
}

/**
 * Exercise 8
 *
 * create function "findMaxNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the maximum number
 */

function findMaxNumber(n1, n2, n3, n4) {
  return Math.max(n1, n2, n3, n4);
}
console.log(findMaxNumber(2, 6, 1, 8));

/**
 * Exercise 9
 *
 * create function "findMinNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the minimum number
 */
function findMinNumber(n1, n2, n3, n4) {
  return Math.min(n1, n2, n3, n4);
}
console.log(findMinNumber(2, 6, 1, 8));
