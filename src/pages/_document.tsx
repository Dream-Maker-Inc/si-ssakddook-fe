import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="user-scalable=no" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Script
          src="https://code.jquery.com/jquery-1.12.4.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          strategy="beforeInteractive"
        ></Script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
