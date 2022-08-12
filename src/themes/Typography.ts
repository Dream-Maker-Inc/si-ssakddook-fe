import { TypographyOptions } from "@mui/material/styles/createTypography";
import { color } from "@mui/system";
import { LightColor } from "./Color";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "IropkeBatangM,sans-serif",
  h1: {
    fontSize: "20px", //20px
  },
  h2: {
    fontSize: "16px", //16px
    color: LightColor.TextMain,
  },
  body1: {
    fontSize: "12px", // 12px
  },
  body2: {
    fontSize: "10px", //10px
  },
  caption: {
    fontSize: "10px", //10px
    color: LightColor.Gray100,
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};

export const darkTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
