import { Colors } from "./types";

export const baseColors = {
  failure: "#FF0000",
  primary: "#0f5f54",
  primaryBright: "#0f5f54",
  primaryDark: "#0f5f54",
  secondary: "#0e3731",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#0f5f54",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#caeccb",
  tertiary: "#EFF4F5",
  text: "#0e3731",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e5951",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #b0f1a7 0%, #aff294 100%)",
    violet: "linear-gradient(180deg, #d4fbc9 0%, #c0fab8 100%)",
    violetAlt: "linear-gradient(180deg, #ceefcb 0%, #9bd09a 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#0f5f54",
  background: "#08060B",
  backgroundDisabled: "#28a392",
  backgroundAlt: "#27262c",
  cardBorder: "#334132",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#0098A1",
  inputSecondary: "#233021",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#637161",
  textSubtle: "#b2d2ad",
  disabled: "#4c634b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #355c31 0%, #31542a 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #31542a 0%, #355c31 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #304530 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #499949 0%, #5bb24d 100%)",
    violetAlt: "linear-gradient(180deg, #487543 0%, #5c8d57 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
