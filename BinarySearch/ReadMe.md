# Binary Search Implementation in Python

## Overview

This project contains an implementation of the binary search algorithm in Python. Binary search is an efficient way to find a target value within a **sorted** array. The algorithm works by repeatedly dividing the search interval in half until the target value is found or the interval is empty.

## How It Works

The function `binary_search` takes the following parameters:
- `a`: The sorted array in which to search.
- `l`: The left boundary index of the current search interval.
- `r`: The right boundary index of the current search interval.
- `key`: The target value to search for.

### Algorithm Steps:
1. **Base Condition**: If the left index `l` is greater than the right index `r`, the search interval is empty, and the function returns `0` (indicating the element was not found).
2. **Calculate Middle Index**: The middle index `m` is calculated as the floor division of `(l + r) / 2`.
3. **Compare the Middle Element**:
   - If `a[m]` equals `key`, the function sets `flag` to `m`, indicating the index where the key is found.
   - If `key` is less than `a[m]`, the function recursively searches the left half by calling `binary_search(a, l, m-1, key)`.
   - If `key` is greater than `a[m]`, the function recursively searches the right half by calling `binary_search(a, m+1, r, key)`.
