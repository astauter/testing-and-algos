describe('largestPalindrome', () => {
    it('is a function', () => {
        expect(typeof largestPalindrome).toEqual('function')
    });
    it('returns the largest palindromic number created from the product of two numbers that are the length of the input', () => {
        expect(typeof largestPalindrome(1)).toEqual(9);
        expect(typeof largestPalindrome(2)).toEqual(9009);

    });
});
describe('isPalindrome', () => {
    it('is a function', () => {
        expect(typeof isPalindrome).toEqual('function')
    });
    it('returns a boolean', () => {
        expect(typeof isPalindrome()).toEqual('boolean');
    });
    it('true when a number is a palindromic number and false when it isnt', () => {
        expect(typeof isPalindrome(2)).toEqual(true);
        expect(typeof isPalindrome(101)).toEqual(true);
        expect(typeof isPalindrome(192291)).toEqual(true);
        expect(typeof isPalindrome(91)).toEqual(false);
        expect(typeof isPalindrome(91991)).toEqual(false);
        expect(typeof isPalindrome(10239834701579179480328923)).toEqual(false);
    });
});
