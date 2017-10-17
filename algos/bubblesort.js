function bubbleSort(arr) {
    let i = arr.length
    while (i > 0) {
        for (let j = 0; j < i - 1; j++) {
            let swapped = swap(arr[j], arr[j + 1])
            arr[j] = swapped[0];
            arr[j + 1] = swapped[1];
        }
        i--
    }
    return arr;
}

function swap(num1, num2) {
    if (num2 < num1) {
        return [num2, num1]
    }
    else return [num1, num2];
}
