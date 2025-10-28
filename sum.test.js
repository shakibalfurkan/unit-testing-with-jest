import { isValidInput, sum } from "./sum";

describe("sum function", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

test("testing falsy values", () => {
  const n = 0;
  expect(n).toBeFalsy();
});

test("testing truthy values", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

test("throws an error when invalid input is provided", () => {
  expect(() => isValidInput("a")).toThrow(
    "Invalid input: Input must be a number"
  );
});
