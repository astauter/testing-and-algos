describe('Merge sort', () => {
    it('is a function', () => {
        expect(typeof mergeSort).toEqual('function');
    });
    it('handles an empty array', () => {
        expect(mergeSort([])).toEqual([]);
    });
    it('sorts an array', () => {
        expect(mergeSort([1])).toEqual([1]);
        expect(mergeSort([9, 3, 1])).toEqual([1, 3, 9]);
        expect(mergeSort([1, 4, 6, 1, 4, 2])).toEqual([1, 1, 2, 4, 4, 6]);
        let unsortedArray = [];
        let i = 0;
        while (i < 11) {
            unsortedArray.push(Math.ceil(Math.random() * 10 * (Math.random() * 5)))
            i++
        }
        let sorted = unsortedArray.slice(0).sort((a, b) => { return a - b });

        expect(mergeSort(unsortedArray)).toEqual(sorted)
    })
});

