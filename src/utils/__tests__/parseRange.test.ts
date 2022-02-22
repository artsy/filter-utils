import { parseRange } from "../parseRange";

describe("parseRange", () => {
  it("correctly parse range in inches", () => {
    expect(parseRange("10-20", "in")).toEqual([10, 20]);
  });

  it("correctly parse range in inches with default value", () => {
    expect(parseRange("10-*", "in")).toEqual([10, "*"]);
  });

  it("correctly parse range in inches when all values are default", () => {
    expect(parseRange("*-*", "in")).toEqual(["*", "*"]);
  });

  it("correctly parse range in centimeters", () => {
    expect(parseRange("1-2", "cm")).toEqual([3, 5]);
  });

  it("correctly parse range in centimeters with default value", () => {
    expect(parseRange("1-*", "cm")).toEqual([3, "*"]);
  });

  it("correctly parse range in centimeters when all values are default", () => {
    expect(parseRange("*-*", "cm")).toEqual(["*", "*"]);
  });
});
