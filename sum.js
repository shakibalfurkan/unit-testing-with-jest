export function sum(a, b) {
  return a + b;
}

export function isValidInput(a) {
  if (typeof a !== "number") {
    throw new Error("Invalid input: Input must be a number");
  }
}

export function fetchData(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
}

export function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
}
