import "@/common/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { findTheme, ThemeTypes } from "@/themes/CustomThemes";
import { DefaultLayout } from "@/common/components/layout/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <DefaultLayout>
        <main>
          <Component {...pageProps} />
        </main>
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
