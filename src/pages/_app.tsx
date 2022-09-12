import "@/common/styles/globals.css";
import { findTheme, ThemeTypes } from "@/themes/CustomThemes";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

declare global {
  interface Window {
    IMP?: any;
  }
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
