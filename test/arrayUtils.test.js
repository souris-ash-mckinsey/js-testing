const { 
  doubleNumbers, 
  tripleNumbersAndReturnEven, 
  tripleNumbersAndReturnEvenWithReduce 
} = require('../src/arrayUtils');

describe('Array utilities', () => {
  describe('Double numbers in array', () => {
    it('should double the numbers in the passed array', () => {
      expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
    });

    it('should throw error if non-array argument is passed', () => {
      expect(() => doubleNumbers(2)).toThrow(TypeError);
    });
  });

  describe('Triple numbers and return only even ones in an array using map and filter', () => {
    it('should triple the numbers only, if all numbers are even in passed array', () => {
      expect(tripleNumbersAndReturnEven([2, 4, 6])).toEqual([6, 12, 18]);
    });

    it('should triple the numbers and return only even ones', () => {
      expect(tripleNumbersAndReturnEven([1, 2, 3, 4])).toEqual([6, 12]);
    });

    it('should return empty array if all passed numbers are odd', () => {
      expect(tripleNumbersAndReturnEven([1, 3, 5])).toEqual([]);
    });

    it('should throw TypeError if argument passed is not an array', () => {
      expect(() => tripleNumbersAndReturnEven(3)).toThrow(TypeError);
    });
  });

  describe('Triple numbers and return only even ones in an array using reduce', () => {
    it('should triple the numbers only, if all numbers are even in passed array', () => {
      expect(tripleNumbersAndReturnEvenWithReduce([2, 4, 6])).toEqual([6, 12, 18]);
    });

    it('should triple the numbers and return only even ones', () => {
      expect(tripleNumbersAndReturnEvenWithReduce([1, 2, 3, 4])).toEqual([6, 12]);
    });

    it('should return empty array if all passed numbers are odd', () => {
      expect(tripleNumbersAndReturnEvenWithReduce([1, 3, 5])).toEqual([]);
    });

    it('should throw TypeError if argument passed is not an array', () => {
      expect(() => tripleNumbersAndReturnEvenWithReduce(3)).toThrow(TypeError);
    });
  });
});