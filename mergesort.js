function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let middle = arr.length / 2;
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let leftPointer = 0;
    let rightPointer = 0;
    let merged = [];
    while (leftPointer < left.length && rightPointer < right.length) {
        if (left[leftPointer] < right[rightPointer]) {
            merged.push(left[leftPointer])
            leftPointer++;
        } else {
            merged.push(right[rightPointer]);
            rightPointer++;
        }
    }
    return merged.concat(left.slice(leftPointer)).concat(right.slice(rightPointer))
}
