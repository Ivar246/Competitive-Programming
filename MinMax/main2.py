import math


a = []
def min_max(l,r):
    if l==r:
        max=min=a[l]
    elif l==r-1:
        if(a[l]<a[r]):
            max=a[r]
            min=a[l]
        else:
            max=a[l]
            min=a[r]
    else:
        mid = math.floor((l+r)/2)
        min, max = min_max(l, mid)
        min1, max1 = min_max(mid+1,r)

        # combine solution
        if(max1> max): 
            max=max1
        if(min1<min):
            min=min1

