// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px

type deviceSize = {
  small: string;
  medium: string;
  large: string;
};

const breakpoints: deviceSize = {
  small: "500px",
  medium: "950px",
  large: "1200px",
};

export const device = {
  sm: `(max-width: ${breakpoints.small})`,
  md: `(max-width: ${breakpoints.medium})`,
  lg: `(max-width: ${breakpoints.large})`,
};
