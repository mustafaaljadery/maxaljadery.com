import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          src="https://embeds.staginghiiv.com/recommendations.js?_bhpid=13020644-15e7-4c33-bb4e-aacb03e926f2&v=1"
          data-beehiiv-recommendations-widget
          defer
        ></script>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
