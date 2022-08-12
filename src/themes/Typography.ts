import { TypographyOptions } from "@mui/material/styles/createTypography";
import { color } from "@mui/system";
import { LightColor } from "./Color";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "IropkeBatangM,sans-serif",
  h1: {
    fontSize: "20px",
    fontWeight: 400,
  },
  h2: {
    fontSize: "4.44vw", //16px
    fontWeight: 400,
    color: LightColor.TextMain,
  },
  body1: {
    fontSize: "3.33vw", // 12px
    fontWeight: 400,
  },
  body2: {
    fontSize: "2.77vw", //10px
    fontWeight: 400,
  },
  caption: {
    fontSize: "2.77vw", //10px
    fontWeight: 400,
    color: LightColor.Gray100,
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};

export const darkTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
