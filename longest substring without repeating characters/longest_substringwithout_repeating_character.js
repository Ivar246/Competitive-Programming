/* Given a string s, find the length of the longest 
substring  without repeating characters
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let stack = [];
  let len = 0;
  for (let ch of s) {
    if (stack.includes(ch)) stack = stack.slice(stack.indexOf(ch) + 1);
    stack.push(ch);
    len = stack.length > len ? stack.length : len;
  }
  return len;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbbb")); // 2
console.log(lengthOfLongestSubstring("pwwkew")); //3
