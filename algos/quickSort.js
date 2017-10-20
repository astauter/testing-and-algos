function quickSort(arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
        let pivot = sort(arr, left, right);

        if (left < pivot - 1) {
            quickSort(arr, left, pivot - 1);
        }
        if (pivot < right) {
            quickSort(arr, pivot, right)
        }
    }
    return arr;
}

function sort(arr, left, right) {
    let pivot = Math.floor((left + right) / 2);
    while (left <= right) {
        while (arr[left] < arr[pivot]) {
            left++;
        }
        while (arr[right] > arr[pivot]) {
            right--;
        }
        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}
