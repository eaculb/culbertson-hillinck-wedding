import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import RsvpButton from "./RsvpButton";
import NavLink from "./NavLink";
import { useTheme } from "@mui/private-theming";

export default function Menu() {
  const theme = useTheme();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: theme.appBarHeight, px: 3, pt: 2 }}
    >
      <Grid item xs={6}>
        <Box />
      </Grid>

      <Grid item>
        <NavLink path="/home" label="Home" />
      </Grid>
      <Grid item>
        <NavLink path="/about-us" label="About Us" />
      </Grid>
      <Grid item>
        <NavLink path="/travel" label="Travel" />
      </Grid>
      <Grid item>
        <NavLink path="/registry" label="Registry" />
      </Grid>
      <Grid item>
        <RsvpButton />
      </Grid>
    </Grid>
  );
}
