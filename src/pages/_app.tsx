import "@/common/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { findTheme, ThemeTypes } from "@/themes/CustomThemes";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
