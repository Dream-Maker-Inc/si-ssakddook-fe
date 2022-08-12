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
          fontSize: "3.3vw",
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
