# Merge Sort Algorithm in Python

This repository contains a Python implementation of the Merge Sort algorithm. Merge Sort is a divide-and-conquer sorting algorithm that efficiently sorts an array by dividing it into smaller subarrays, sorting those subarrays, and then merging them back together.

## Algorithm

Merge Sort works by following these steps:

1. **Divide:** Split the array into two halves until each subarray contains a single element or is empty.
2. **Conquer:** Recursively sort each subarray.
3. **Combine:** Merge the sorted subarrays to produce the sorted array.

### Merge Operation

The `merge` function combines two sorted subarrays into a single sorted array:

1. **Initialization:** Create an empty list to store the merged result and two pointers to traverse the subarrays.
2. **Comparison:** Compare elements from both subarrays and append the smaller element to the result list.
3. **Extension:** Once one subarray is exhausted, append the remaining elements from the other subarray.
4. **Return:** Return the merged sorted list.

## Time Complexity

- **Best Case:** \(O(n \log n)\)  
  Even in the best case where the array is already sorted, Merge Sort will still perform the same number of comparisons and merges, resulting in \(O(n \log n)\) complexity.

- **Average Case:** \(O(n \log n)\)  
  The algorithm consistently performs \(O(n \log n)\) operations as it divides the array and merges the subarrays.

- **Worst Case:** \(O(n \log n)\)  
  The worst-case time complexity remains \(O(n \log n)\) regardless of the initial arrangement of the elements in the array.

## Space Complexity

- **Space Complexity:** \(O(n)\)  
  Merge Sort requires additional space proportional to the size of the input array for the merge operation. This additional space is used to store temporary arrays while merging, resulting in linear space complexity.

