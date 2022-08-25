import "@/common/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { findTheme, ThemeTypes } from "@/themes/CustomThemes";
import Layout from "@/common/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
