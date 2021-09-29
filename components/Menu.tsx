import React from "react";
import Link from "next/link";

import Grid from "@mui/material/Grid";

import NavButton from "./NavButton";

export default function Menu() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      sx={{ py: 3 }}
      spacing={1}
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
