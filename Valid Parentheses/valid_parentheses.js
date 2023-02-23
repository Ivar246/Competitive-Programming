/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

condition of validation:
    -Open brackets must be closed by the same type of brackets.
    -Open brackets must be closed in the correct order.
    -Every close bracket has a corresponding open bracket of the same type.

*/
/**
 * @param {string} s
 * @return {boolean}
 */

let isValid = function (s) {
  const open = ["(", "{", "["];
  const close = [")", "}", "]"];
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      stack.push(s[i]);
    } else if (open.indexOf(stack.pop()) !== close.indexOf(s[i])) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("(){}")); // true
console.log(isValid("(}[]")); // false
