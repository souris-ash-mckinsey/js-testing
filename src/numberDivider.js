class CannotDivideByZeroError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

const tryDividingAByB = (a, b) => {
  if (b === 0) {
    throw new CannotDivideByZeroError("Second argument cannot be 0. Cannot divide by zero.");
  }

  return a / b;
}

module.exports = { tryDividingAByB, CannotDivideByZeroError };