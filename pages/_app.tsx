import * as React from "react";
import Head from "next/head";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../src/theme";
import Menu from "../components/Menu";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/wgh7vrw.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&family=Karma:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <Menu />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "64px",
            height: `calc(100vh - ${theme.appBarHeight}px)`,
          }}
        >
          <Component {...pageProps} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
