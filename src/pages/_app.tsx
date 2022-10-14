import { useFlutterBridgeListen } from "@/common/flutter-bridge/useFlutterbridgeListen";
import "@/common/styles/globals.css";
import { ChatProvider } from "@/domains/chat/ChatProvider";
import { findTheme, ThemeTypes } from "@/themes/CustomThemes";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

declare global {
  interface Window {
    IMP?: any;
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  useFlutterBridgeListen();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
          <ChatProvider>
            <Fragment>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
                />
              </Head>
              <main>
                <Component {...pageProps} />
              </main>
            </Fragment>
          </ChatProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
