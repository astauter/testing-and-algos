describe('quick sort', () => {
    it('it is a function', () => {
        expect(typeof quickSort).toEqual('function');
    });
    it('handles an empty array', () => {
        expect(quickSort([])).toEqual([]);
    })
    it('sorts an array', () => {
        expect(quickSort([1])).toEqual([1]);
        expect(quickSort([9, 3, 1])).toEqual([1, 3, 9]);
        expect(quickSort([2, 1, 4, 65])).toEqual([1, 2, 4, 65]);
        expect(quickSort([1, 4, 6, 1, 4, 2])).toEqual([1, 1, 2, 4, 4, 6]);
        let unsortedArray = [];
        let i = 0;
        while (i < 11) {
            unsortedArray.push(Math.ceil(Math.random() * 10 * (Math.random() * 5)))
            i++
        }
        let sorted = unsortedArray.slice(0).sort((a, b) => { return a - b });

        expect(quickSort(unsortedArray)).toEqual(sorted)
    })
})
