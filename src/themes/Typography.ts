import { TypographyOptions } from "@mui/material/styles/createTypography";
import { LightColor } from "./Color";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "IropkeBatangM,sans-serif",
  h1: {
    fontSize: "22px",
  },
  h2: {
    fontSize: "18px", //16px
    lineHeight: 1.4,
    color: LightColor.TextMain,
  },
  h3: {
    fontSize: "16px",
    lineHeight: 1.4,
  },

  h4: {
    fontSize: "12px",
    lineHeight: 1.4,
    color: LightColor.TextMain,
  },
  h5: {
    fontSize: "10px",
    lineHeight: 1.4,
    color: LightColor.TextMain,
  },
  body1: {
    fontSize: "14px",
    lineHeight: 1.4,
  },
  body2: {
    fontSize: "12px",
    lineHeight: 1.4,
  },
  caption: {
    fontSize: "12px",
    lineHeight: 1.4,
    color: LightColor.Gray100,
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};

export const darkTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
