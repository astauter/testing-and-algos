describe('Insertion Sort', () => {
    it('is a function', () => {
        expect(typeof insertionSort).toEqual('function');
    });
    it('handles an empty array', () => {
        expect(insertionSort([])).toEqual([]);
    });
    it('sorts an array', () => {
        expect(insertionSort([1])).toEqual([1]);
        expect(insertionSort([9, 3, 1])).toEqual([1, 3, 9]);
        // expect(insertionSort([1, 4, 6, 1, 4, 2])).toEqual([1, 1, 2, 4, 4, 6]);
        // let unsortedArray = [];
        // let i = 0;
        // while (i < 11) {
        //     unsortedArray.push(Math.ceil(Math.random() * 10 * (Math.random() * 5)))
        //     i++
        // }
        // let sorted = unsortedArray.slice(0).sort((a, b) => { return a - b });

        // expect(insertionSort(unsortedArray)).toEqual(sorted)
    })
});
