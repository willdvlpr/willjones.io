type deviceSize = {
  mobileSmall: string;
  mobileMedium: string;
  mobileLarge: string;
  small: string;
  medium: string;
  large: string;
  xLarge: string;
};

const breakpoints: deviceSize = {
  mobileSmall: "350px",
  mobileMedium: "375px",
  mobileLarge: "420px",
  small: "500px",
  medium: "850px",
  large: "1000px",
  xLarge: "1200px",
};

export const device = {
  mobileSm: `(max-width: ${breakpoints.mobileSmall})`,
  mobileMd: `(max-width: ${breakpoints.mobileMedium})`,
  mobileLg: `(max-width: ${breakpoints.mobileLarge})`,
  sm: `(max-width: ${breakpoints.small})`,
  md: `(max-width: ${breakpoints.medium})`,
  lg: `(max-width: ${breakpoints.large})`,
  xl: `(max-width: ${breakpoints.xLarge})`,
};
