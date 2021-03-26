import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#0f5f54",
  primaryBright: "#0f5f54",
  primaryDark: "#0f5f54",
  secondary: "#0e3731",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,

  background: "#f1f0f0",
  backgroundDisabled: "#E9EAEB",
  contrast: "#0b2b27",
  invertedContrast: "#FFFFFF",
  input: "#ebf4ea",
  tertiary: "#EFF4F5",
  text: "#0e3731",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e5951",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #e6ffe7 0%, #efffef 100%)",
  },
  inputSecondary: "#caecd1",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,

  secondary: "#0f5f54",
  background: "#343135",
  backgroundDisabled: "#28a392",
  contrast: "#FFFFFF",
  invertedContrast: "#0d4039",
  input: "#0098A1",
  primaryDark: "#0098A1",
  tertiary: "#28a392",
  text: "#FFFFFF",
  textDisabled: "#cccccc",
  textSubtle: "#c9c4d4",
  borderColor: "#28a392",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #0f5f54 0%, #0e3731 100%)",
  },
  inputSecondary: "#5b8d57",
};
