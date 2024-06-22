function two_sum(arr, target) {
    let num_to_index = {}

    for (let i in arr) {
        let diff = target - arr[i]
        if (Object.hasOwn(num_to_index, diff))
            return [num_to_index[diff], i]
        num_to_index[arr[i]] = i
    }
}


let arr = [2, 7, 9, 5, 6]
target = 9
console.log(two_sum(arr, target))