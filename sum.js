export function sum(a, b) {
  return a + b;
}

export function isValidInput(a) {
  if (typeof a !== "number") {
    throw new Error("Invalid input: Input must be a number");
  }
}
