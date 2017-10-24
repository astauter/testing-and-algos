function smallestMult(arr) {
    arr.sort((a, b) => { return b - a });
    let multiple;
    for (let i = 1; i < Infinity; i++) {
        multiple = arr[0] * i;
        let j = 1;
        while (j <= arr.length) {
            if (j === arr.length) {
                return multiple;
            }
            if (multiple % arr[j] !== 0) {
                break;
            }
            j++;
        }
    }
}

console.log(smallestMult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))
