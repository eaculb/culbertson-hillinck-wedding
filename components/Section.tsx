import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PaletteOptions } from "@mui/material/styles/createPalette";

interface Props {
  backgroundColor?: PaletteOptions;
  children: React.ReactNode;
  containerSx?: any;
}

export default function Section({
  backgroundColor,
  children,
  containerSx,
}: Props) {
  return (
    <Box
      sx={{
        ...(backgroundColor ? { backgroundColor } : {}),
        px: { xs: "20px", md: "5vw" },
      }}
    >
      <Grid container spacing={3} sx={{ ...containerSx }}>
        {children}
      </Grid>
    </Box>
  );
}
