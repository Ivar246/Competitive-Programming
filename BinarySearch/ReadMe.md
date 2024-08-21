# Binary Search Algorithm Implementation

## Overview

Binary search is an efficient method for finding a target value within a **sorted** array by repeatedly dividing the search interval in half.

## Algorithm Description

The `binary_search` function performs the following steps:
1. **Initial Setup**:
   - Takes a sorted array `a`, left index `l`, right index `r`, and the target value `key`.

2. **Search Process**:
   - **Base Case**: If the left index `l` is greater than the right index `r`, return `-1` (indicating the target value is not present in the array).
   - **Calculate Middle Index**: Compute the middle index `m` using `math.floor((l + r) / 2)`.
   - **Compare and Recur**:
     - If the middle element `a[m]` equals the target `key`, return `m` (index where the key is found).
     - If the target is less than `a[m]`, recursively search the left subarray (`l` to `m-1`).
     - If the target is greater than `a[m]`, recursively search the right subarray (`m+1` to `r`).

3. **Return**:
   - If the element is found, return its index.
   - If the element is not found, return `-1`.

### Time Complexity

- **Best Case**: `O(1)`  
  The best case occurs when the target value is found in the middle of the array on the first comparison.

- **Average Case**: `O(log n)`  
  On average, binary search performs `log2(n)` comparisons, where `n` is the number of elements in the array. This logarithmic time complexity makes binary search much faster than linear search for large arrays.

- **Worst Case**: `O(log n)`  
  The worst case occurs when the target value is either not present or located at one of the ends of the array. In this case, the algorithm performs approximately `log2(n)` comparisons to either find the target or conclude that it is not in the array.
