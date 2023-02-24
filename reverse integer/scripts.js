/*Given a signed 32 - bit integer x, return x with its digits reversed.
If reversing x causes the value to go
 outside the signed 32 - bit integer range[-231, 231 - 1], then return 0
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNeg = x < 0;
  if (isNeg) x *= -1;
  let rev = 0;
  while (x > 0) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return rev > 2 ** 31 - 1 ? 0 : isNeg ? rev * -1 : rev;
};

console.log(reverse(-123)); // -321
console.log(reverse(123)); // 321
console.log(reverse(2 ** 31)); // 0
