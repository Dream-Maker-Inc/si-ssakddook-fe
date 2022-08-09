import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseTypographyOptions: TypographyOptions = {
  h1: {
    fontSize: "20px",
    fontWeight: 400,
  },
  h2: {
    fontSize: "16px",
    fontWeight: 400,
  },
  body1: {
    fontSize: "12px",
    fontWeight: 400,
  },
  body2: {
    fontSize: "10px",
    fontWeight: 400,
  },
  caption: {
    fontWeight: 100,
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};

export const darkTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
