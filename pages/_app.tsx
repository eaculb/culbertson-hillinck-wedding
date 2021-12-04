import * as React from "react";
import Head from "next/head";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "@/src/theme";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: Record<string, unknown>;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/wgh7vrw.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* @ts-ignore */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&family=Karma:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box sx={{ display: "flex", position: "relative" }}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Menu />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: theme.appBarHeight,
            width: "100%",
            height: `calc(100vh - ${theme.appBarHeight}px)`,
          }}
        >
          <Component {...pageProps} />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
