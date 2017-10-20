function evenFib(num) {
    let tempArr = [1, 2];
    if (num < 2) {
        return 0;
    }
    let i = 2
    let sum = 2;
    while (i < num) {
        let newFib = tempArr[0] + tempArr[1];
        if (newFib > 4000000) {
            break;
        }
        tempArr = [tempArr[1], newFib]
        if (newFib % 2 === 0) {
            sum += newFib
        }
        i++;
    }
    return sum;
}
