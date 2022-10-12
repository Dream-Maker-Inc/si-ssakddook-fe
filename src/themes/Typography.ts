import { TypographyOptions } from "@mui/material/styles/createTypography";
import { LightColor } from "./Color";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "IropkeBatangM,sans-serif",
  h1: {
    fontSize: "22px",
  },
  h2: {
    fontSize: "18px", //16px
    lineHeight: "26.65px",
    color: LightColor.TextMain,
  },
  h3: {
    fontSize: "16px",
    lineHeight: "20px",
  },

  h4: {
    fontSize: "12px",
    lineHeight: "16.65px",
    color: LightColor.TextMain,
  },
  h5: {
    fontSize: "10px",
    lineHeight: "13.32px",
    color: LightColor.TextMain,
  },
  body1: {
    fontSize: "14px",
    lineHeight: "16.65px",
  },
  body2: {
    fontSize: "12px",
    lineHeight: "16.65px",
  },
  caption: {
    fontSize: "12px",
    lineHeight: "16.65px",
    color: LightColor.Gray100,
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};

export const darkTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
