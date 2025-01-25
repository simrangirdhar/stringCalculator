import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  it("should return the number itself for a single number string", () => {
    expect(add("1")).toBe(1);
  });
  it("should return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });
  it("should return the sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });
  it("should handle new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  it("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  it("should throw an exception for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "Negative numbers not allowed: -2, -4"
    );
  });
});