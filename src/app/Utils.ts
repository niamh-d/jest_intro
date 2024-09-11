export class StringUtils {
  public toUpperCase(str: string) {
    if (!str) {
      throw new Error("Invalid string");
    }
    return str.toUpperCase();
  }
}

export function toUpperCase(str: string) {
  return str.toUpperCase();
}

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

/* istanbul ignore next */
export function getStringInfo(str: string): stringInfo {
  return {
    lowerCase: str.toLowerCase(),
    upperCase: str.toUpperCase(),
    characters: Array.from(str),
    length: str.length,
    extraInfo: {},
  };
}
