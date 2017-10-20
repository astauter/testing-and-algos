describe('largestPrimeFactor', () => {
    it('is a function', () => {
        expect(typeof largestPrimeFactor).toEqual('function');
    });
    it('returns a value', () => {
        expect(typeof largestPrimeFactor()).toEqual('number')
    });
    it('returns the largest prime factor', () => {
        expect(largestPrimeFactor(10)).toEqual(5);
        expect(largestPrimeFactor(13195)).toEqual(29);
    })
});
