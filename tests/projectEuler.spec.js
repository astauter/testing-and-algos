describe('sumOfMultiplesOfThreeAndFive', () => {
    it('is a function', () => {
        expect(typeof sumOfMultiplesOfThreeAndFive).toEqual('function');
    });
    it('returns the sum of all the numbers of multiples of 3 or 5', () => {
        expect(sumOfMultiplesOfThreeAndFive(10)).toEqual(23)
        expect(sumOfMultiplesOfThreeAndFive(5)).toEqual(8)
    });
});
