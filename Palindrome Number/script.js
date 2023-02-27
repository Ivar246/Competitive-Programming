/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  if (x > 2 ** 31 - 1) return;
  let rev = 0;
  let temp = x;
  while (temp > 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return rev === x;
};
