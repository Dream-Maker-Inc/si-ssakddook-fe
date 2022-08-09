import { PaletteOptions } from "@mui/material";

export enum LightColor {
  Background = "#F9F9F9",
  Primary = "#8BDA49",
  PrimaryDark = "#5A8835",

  TextMain = "#606060",
  TextSub = "#DDDDDD",

  Gray500 = "#F1F1F1",
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: LightColor.PrimaryDark,
  },
  secondary: {
    main: LightColor.Gray500,
  },
  text: {
    primary: LightColor.TextMain,
    secondary: LightColor.TextSub,
  },

  background: { default: LightColor.Background },
};
