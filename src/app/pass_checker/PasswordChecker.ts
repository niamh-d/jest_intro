export enum PasswordErrors {
  SHORT = "Password is too short",
  NO_LOWER = "Password must contain at least one lower case letter",
  NO_UPPER = "Password must contain at least one upper case letter",
}

export interface CheckResult {
  isValid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];

    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
    if (password == password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER);
    }
    if (password == password.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER);
    }
    return {
      isValid: reasons.length === 0,
      reasons,
    };
  }
}
