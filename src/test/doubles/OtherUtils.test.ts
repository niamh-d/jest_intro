import { calculateComplexity } from "../../app/doubles/OtherUtils";

describe("OtherUtils", () => {
  it("should calculate complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "someInfo",
        field2: "someOtherInfo",
      },
    };

    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
