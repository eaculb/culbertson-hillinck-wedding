import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import { useTheme, Theme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  backgroundColor?: PaletteOptions;
  children: React.ReactNode;
}

export default function Section({ backgroundColor, children }: Props) {
  const theme: Theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ ...(backgroundColor ? { backgroundColor } : {}), px: isSmall ? "20px" : "5vw" }}>
      <Grid container sx={{ py: 7, minHeight: "50vh" }} alignItems="center">
        {children}
      </Grid>
    </Box>
  );
}
