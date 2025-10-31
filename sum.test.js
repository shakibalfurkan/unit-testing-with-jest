import { jest } from "@jest/globals";
import { fetchData, fetchPromise, isValidInput, sum } from "./sum";

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

test("will fetch data peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

test("the data is peanut butter", () => {
  return expect(fetchPromise()).resolves.toBe("peanut butter");
});

// test("the fetch fails with an error", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

it("should fetch peanut butter", async () => {
  const data = await fetchPromise();
  expect(data).toBe("peanut butter");
});

test("mock implementation example", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(1)).toBe(43);
  expect(mock(2)).toBe(44);
  expect(mock).toHaveBeenCalledTimes(2);
});

test("spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});

test("check isArray", () => {
  const arr = [1, 2, 3];
  expect(Array.isArray(arr)).toBe(true);
});

test("check string contains substring", () => {
  const str = "Hello, world!";
  expect(str).toContain("world");
});

test("check array length", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(arr).toHaveLength(5);
});

test("check number greater than", () => {
  const num = 10;
  expect(num).toBeGreaterThan(5);
});

test("check object has property", () => {
  const obj = { name: "Alice", age: 30 };
  expect(obj).toHaveProperty("name");
});

test("check string matches regex", () => {
  const str = "abc123";
  expect(str).toMatch(/[a-z]+\d+/);
});
