function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let mainVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > mainVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = mainVal
    }
    return arr;
}
