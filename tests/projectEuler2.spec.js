describe('evenFib', () => {
    it('is a function', () => {
        expect(typeof evenFib).toEqual('function')
    });
    it('returns a number', () => {
        expect(typeof evenFib()).toEqual('number')
    });
    it('returns the sum of even values in a Fibonacci sequence', () => {
        expect(evenFib(5)).toEqual(10);
        expect(evenFib(10)).toEqual(44);
    })
})
