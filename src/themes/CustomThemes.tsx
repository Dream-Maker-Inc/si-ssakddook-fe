import { unstable_useEnhancedEffect } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { lightPalette } from "./Color";

import { lightTypographyOptions } from "./Typography";

export const lightTheme = createTheme({
  palette: lightPalette,
  typography: lightTypographyOptions,
  shape: { borderRadius: 8 },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          height: "5.65vh",
          minHeight: "36px",
          boxShadow: "none",
          margin: "0px",
          fontSize: "12px",
          lineHeight: "20px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "0px",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "8px",

          // default
          "&.MuiOutlinedInput-root": {
            border: "1px solid #CCCCCC",
            borderRadius: "8px",

            "& input": {
              padding: "8px 10px",
              height: "unset",
            },

            "& fieldset": {
              border: "none",
            },

            "& textarea": {
              fontSize: "12px",
            },
          },

          // focused
          "&.Mui-error": {
            border: "1px solid transparent",
          },
          // focused
          "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
            border: "1px solid transparent",
          },
          // error
          "&.Mui-error fieldset.MuiOutlinedInput-notchedOutline": {
            border: "1px solid #D84849",
          },
        },

        input: {
          fontSize: "12px",
          lineHeight: "20px",

          // placeholder
          "::placeholder": {
            color: "#A4A4A4",
            opacity: 1,
            fontSize: "12px",
          },
        },
      },
    },
  },
});

export enum ThemeTypes {
  Light,
  Dark,
}

export const findTheme = (theme: ThemeTypes) => {
  switch (theme) {
    default:
      return responsiveFontSizes(lightTheme);
  }
};

export const useThemeHook = () => {
  const [theme, setTheme] = useState(findTheme(ThemeTypes.Light));
  const palette = theme.palette;

  const colorMode = useMemo(
    () => (theme: ThemeTypes) => setTheme(findTheme(theme)),
    []
  );

  return {
    theme,
    palette,
    colorMode,
  };
};
