import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";
import { PasswordError } from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker.ts file", () => {
  describe("PasswordChecker class", () => {
    let sut: PasswordChecker;

    beforeEach(() => {
      sut = new PasswordChecker();
    });

    describe("checkPassword method", () => {
      it("should return SHORT error message for password with LESS than required characters", () => {
        const actual = sut.checkPassword("123456A");
        expect(actual.reasons).toContain(PasswordError.SHORT);
      });

      it("should return UPPER error message for a password with no upper case chars", () => {
        const actual = sut.checkPassword("abcd");
        expect(actual.reasons).toContain(PasswordError.NO_UPPER);
      });

      it("should return LOWER error message for a password with no lower case chars", () => {
        const actual = sut.checkPassword("ABCD");
        expect(actual.reasons).toContain(PasswordError.NO_LOWER);
      });

      it("should reject a password of diverse case less than required length", () => {
        const actual = sut.checkPassword("ABCDefg");
        expect(actual.isValid).toBe(false);
      });

      it("should accept a password of diverse length and of exactly required length", () => {
        const actual = sut.checkPassword("12345Abc");
        expect(actual.isValid).toBe(true);
      });

      it("should accept password of diverse case greater than required length", () => {
        const actual = sut.checkPassword("1234567Aa");
        expect(actual.isValid).toBe(true);
      });
    });

    describe("checkAddminPassword method", () => {
      it("should reject admin passsword of diverse case and required length without number", () => {
        const actual = sut.checkAdminPassword("abcdABCD");
        expect(actual.isValid).toBe(false);
        expect(actual.reasons).toContain(PasswordError.NO_NUMBER);
      });

      it("should accept admin passsword of diverse case and required length with number", () => {
        const actual = sut.checkAdminPassword("abcdABC1");
        expect(actual.reasons).not.toContain(PasswordError.NO_NUMBER);
      });
    });
  });
});
