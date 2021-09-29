import React from "react";

import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";

import NavButton from "./NavButton";

export default function Menu() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      sx={{ height: "64px" }}
    >
      <Grid item>
        <NavButton path="/about-us" label="About Us" />
      </Grid>
      <Grid item>
        <NavButton path="/travel" label="Travel" />
      </Grid>
      <Grid item>
        <NavButton path="/registry" label="Registry" />
      </Grid>
      <Grid item>
        <NavButton
          path="/rsvp"
          label="RSVP"
          variant="outlined"
          color="primary"
        />
      </Grid>
    </Grid>
  );
}
