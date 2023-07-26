function fibonacciNumber(pos) {
  if (pos < 3) return 1;
  return fibonacciNumber(pos - 1) + fibonacciNumber(pos - 2);
}

console.log(fibonacciNumber(3)); // 3
console.log(fibonacciNumber(6)); // 8

// Time complexity: O(2^n)
