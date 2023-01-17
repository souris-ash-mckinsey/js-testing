const doubleNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new TypeError('Unexpected type passed. Expected array of numbers.');
  }

  return numbers.map((elem) => elem * 2);
};

const tripleNumbersAndReturnEven = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new TypeError('Unexpected type passed. Expected an array of numbers.');
  }

  return numbers.map((elem) => elem * 3).filter((elem) => elem % 2 == 0);
}

const tripleNumbersAndReturnEvenWithReduce = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new TypeError('Unexpected type passed. Expected an array of numbers.');
  }

  return numbers.reduce((prev, curr) => {
    if ((curr * 3) % 2 == 0) {
      prev.push(curr * 3);
    }

    return prev;
  }, [])
}

module.exports = { doubleNumbers, tripleNumbersAndReturnEven, tripleNumbersAndReturnEvenWithReduce };