export enum PasswordError {
  SHORT = "Password is too short",
  NO_LOWER = "Password must contain at least one lower case letter",
  NO_UPPER = "Password must contain at least one upper case letter",
}

export interface CheckResult {
  isValid: boolean;
  reasons: PasswordError[];
}

export class PasswordChecker {
  #reasons: PasswordError[];

  constructor() {
    this.#reasons = [];
  }

  public checkPassword(password: string): CheckResult {
    this.checkForLength(password);
    this.checkForUpperCase(password);
    this.checkForLowerCase(password);

    return {
      isValid: this.#reasons.length === 0,
      reasons: this.#reasons,
    };
  }

  private addReason(reason: PasswordError) {
    this.#reasons.push(reason);
  }

  private checkForLength(password: string) {
    if (password.length < 8) {
      this.addReason(PasswordError.SHORT);
    }
  }

  private checkForUpperCase(password: string) {
    if (password == password.toLowerCase()) {
      this.addReason(PasswordError.NO_UPPER);
    }
  }

  private checkForLowerCase(password: string) {
    if (password == password.toUpperCase()) {
      this.addReason(PasswordError.NO_LOWER);
    }
  }
}
