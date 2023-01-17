const { CannotDivideByZeroError, tryDividingAByB } = require('../src/numberDivider');

describe('Division of numbers using tryDivideAByB()', () => {
  it('throws CannotDivideByZeroError if second argument is 0, when passed to tryDivideAByB', () => {
    expect(() => tryDividingAByB(4, 0)).toThrow(CannotDivideByZeroError);
  });

  it('divides numbers as usual if second argument is not 0', () => {
    expect(tryDividingAByB(4, 2)).toBe(2);
  });
})