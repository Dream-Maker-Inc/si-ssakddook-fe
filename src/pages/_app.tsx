import "@/common/styles/globals.css";
import { findTheme, ThemeTypes } from "@/themes/CustomThemes";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

declare global {
  interface Window {
    IMP?: any;
  }
}

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
