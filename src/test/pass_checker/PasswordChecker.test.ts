import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker.ts file", () => {
  describe("PasswordChecker function", () => {
    let sut: PasswordChecker;

    beforeEach(() => {
      sut = new PasswordChecker();
    });

    it("should return false for password with less than 8 characters", () => {
      const actual = sut.checkPassword("123456A");
      expect(actual).toBe(false);
    });

    it("it should return true for password with 8 characters", () => {
      const actual = sut.checkPassword("1234567Aa");
      expect(actual).toBe(true);
    });

    it("should return false for a password with no upper case chars", () => {
      const actual = sut.checkPassword("12345abc");
      expect(actual).toBe(false);
    });

    it("should return false for a password with no lower case chars", () => {
      const actual = sut.checkPassword("12345ABC");
      expect(actual).toBe(false);
    });

    it("should return true for a password with both upper and lower case chars", () => {
      const actual = sut.checkPassword("12345Abc");
      expect(actual).toBe(true);
    });
  });
});
