def min_max(arr):
    max=arr[0]
    min=arr[0]
    for i in range(1,len(arr)-1):
        if min>arr[i]:
            min=arr[i]
        if(max<arr[i]):
            max = arr[i]
        
    return min, max


array = [2,15,45,36,47,1,60]
min, max = min_max(array)
print(f"min: {min}, max: {max}")

# output=> min: 1, max: 47