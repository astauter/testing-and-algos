describe('smallest multiple', () => {
    it('is a function', () => {
        expect(typeof smallestMult).toEqual('function');
    });
    it('takes an array and returns the smallest number that can be divided by the elements in the array', () => {
        expect(smallestMult([1])).toEqual(1);
        expect(smallestMult([1, 2, 3])).toEqual(6);
        expect(smallestMult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(2520)
    })
})
