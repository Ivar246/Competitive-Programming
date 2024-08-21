import math

def binary_search(a, l, r, key):
    flag = 0
    if(l<=r):
        m=math.floor((l+r)/2);
        if(key==a[m]):
            flag=m
        elif(key<a[m]):
            return binary_search(a, l, m-1, key)
        else:
            return binary_search(a, m+1, r, key)
    else:
        return flag
     
    
array = [2,4,7,9,11,12];
l, r = 0, len(array)-1
key=int(input("Enter key: ")) 

# key is a search element

index = binary_search(array,l,r, key )
print("Key found at index: ", index)