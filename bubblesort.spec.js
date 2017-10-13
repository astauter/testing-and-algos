describe('Bubble Sort', () => {
    it('handles an empty array', () => {
        expect(bubbleSort([])).toEqual([]);
    });
    it('sorts an array', () => {
        expect(bubbleSort([1])).toEqual([1]);
        expect(bubbleSort([9, 3, 1])).toEqual([1, 3, 9]);
        expect(bubbleSort([1, 4, 6, 1, 4, 2])).toEqual([1, 1, 2, 4, 4, 6]);
        let unsortedArray = [];
        let i = 0;
        while (i < 11) {
            unsortedArray.push(Math.ceil(Math.random * 10 * (Math.random * 5)))
            i++
        }
        expect(bubbleSort(unsortedArray)).toEqual(unsortedArray.sort())
    })
    it('calls swap a certain amount of times', () => {
        spyOn(window, 'swap').and.callThrough();
        bubbleSort([1, 9, 5, 4, 3]);
        expect(swap.calls.count()).toEqual(10)
        bubbleSort([1, 2]);
        expect(swap.calls.count()).toEqual(11)
    })
});
