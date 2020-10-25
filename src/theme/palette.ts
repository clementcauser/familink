export type PaletteKeys =
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "white"
  | "grey"
  | "black";

export const palette: Palette = {
  primary: {
    light: "#5352ed",
    dark: "#3742fa",
  },
  info: {
    light: "#70a1ff",
    dark: "#1e90ff",
  },
  success: {
    light: "#7bed9f",
    dark: "#2ed573",
  },
  warning: {
    light: "#ff7f50",
    dark: "#ff6348",
  },
  danger: {
    light: "#ff6b81",
    dark: "#ff4757",
  },
  white: {
    light: "#ffffff",
    dark: "#f1f2f6",
  },
  grey: {
    light: "#dfe4ea",
    dark: "#ced6e0",
  },
  black: {
    light: "#57606f",
    dark: "#2f3542",
  },
};

type Palette = {
  [key in PaletteKeys]: {
    light: string;
    dark: string;
  };
};

export type COLORS_WITH_VARIANTS_KEYS =
  | "primary-light"
  | "primary-dark"
  | "info-light"
  | "info-dark"
  | "success-light"
  | "success-dark"
  | "warning-light"
  | "warning-dark"
  | "danger-light"
  | "danger-dark"
  | "white-light"
  | "white-dark"
  | "grey-light"
  | "grey-dark"
  | "black-light"
  | "black-dark";

export const MAP_PALETTE_VARIANTS = {
  "primary-light": palette.primary.light,
  "primary-dark": palette.primary.dark,
  "info-light": palette.info.light,
  "info-dark": palette.info.dark,
  "success-light": palette.success.light,
  "success-dark": palette.success.dark,
  "warning-light": palette.warning.light,
  "warning-dark": palette.warning.dark,
  "danger-light": palette.danger.light,
  "danger-dark": palette.danger.dark,
  "white-light": palette.white.light,
  "white-dark": palette.white.dark,
  "grey-light": palette.grey.light,
  "grey-dark": palette.grey.dark,
  "black-light": palette.black.light,
  "black-dark": palette.black.dark,
};
