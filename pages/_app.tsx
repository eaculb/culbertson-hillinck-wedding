import * as React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../src/theme";
import Menu from "../components/Menu";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Menu />
          </Grid>
          <Grid item xs={12}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
