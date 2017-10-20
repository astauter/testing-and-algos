function quickSort(arr, left = 0, right = arr.length - 1) {
    let index;
    if (arr.length > 1) {
        index = sort(arr, left, right)

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right)
        }
    }
    return arr;
}

function sort(arr, left, right) {
    let pivot = arr[arr.length / 2]
    let i = left;
    let j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}
