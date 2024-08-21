# Binary Search Algorithm

## Overview

Binary search is an efficient algorithm for finding an element in a **sorted** array. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, the search continues in the lower half, or if greater, in the upper half. This process continues until the desired element is found or the interval is empty.

## Time Complexity

- **Best Case**: `O(1)` (when the middle element is the target)
- **Average Case**: `O(log n)`
- **Worst Case**: `O(log n)`

Binary search is much faster than linear search, which has a time complexity of `O(n)`, especially for large arrays.

## Prerequisites

- The array (or list) must be **sorted** in ascending order. Binary search does not work on unsorted arrays.

## How It Works

1. **Initial Setup**:
   - Set two pointers, `low` at the start of the array and `high` at the end of the array.
   
2. **Repeat Until `low` Exceeds `high`**:
   - Calculate the middle index: `mid = (low + high) // 2`.
   - Compare the target value to the value at the middle index.
     - **If equal**: You've found the target; return the index.
     - **If less**: Narrow the search to the left half by setting `high = mid - 1`.
     - **If greater**: Narrow the search to the right half by setting `low = mid + 1`.
   
3. **Return -1 if Not Found**:
   - If `low` exceeds `high`, the target is not in the array; return `-1`.
