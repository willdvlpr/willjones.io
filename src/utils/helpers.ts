import { theme } from "./theme";

const {
  color: { primaryText, secondary },
} = theme;

const isOddNumber = (num: number): boolean => {
  return !!(num % 2);
};

export const getNavItemColor = (index: number): string => {
  return isOddNumber(index) ? primaryText : secondary;
};
