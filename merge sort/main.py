def merge_sort(a:list)->list:
    if(len(a)<=1):
        return a;

    m= len(a)//2
    lhalf = a[:m]
    rhalf= a[m:]

    sortedleft = merge_sort(lhalf)
    sortedright = merge_sort(rhalf)

    return merge(sortedleft, sortedright)


def printlist(a, l, r):
    for i in range(l, r+1):
        print(a[i], end=",")


def merge(r:list, l:list)->list:
    result =  []
    i=j=0

    while i< len(l) and j<len(r):
        if l[i] < r[j]:
            result.append(l[i])
            i=i+1

        else:
            result.append(r[j])
            j=j+1
    
    result.extend(l[i:])
    result.extend(r[j:])

    return result

unsorted_array = [88,14,25,16,82,43,12,28]
sorted_array = merge_sort(unsorted_array)

print(sorted_array)