def partition(arr, l, r):
    x=l
    y=r
    p=arr[r]

    while arr[l]<=p:
        x+=1
    while arr[r]>p:
        y-=1
    if(x<y)

