import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from '@emotion/react';

import "../global.css";
import { useTheme } from "@/contexts/ThemeContext";

const App = ({ Component, pageProps }: AppProps) => {

  const theme = useTheme();
  const textTeriatryColor = theme.components.page.colors.text.teriatry;

  return (
    <>
      <Head>
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        />

        <link
          rel="icon"
          type="image/x-icon"
          sizes="48x48"
          href="/favicon.ico"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
        <meta name="theme-color" content={textTeriatryColor}></meta>

        <title> Login Feed - Atlys</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="w-full h-full">
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
};

export default App;