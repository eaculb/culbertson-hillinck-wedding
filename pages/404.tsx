import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Section from "@/components/Section";
import ComposedLink from "@/components/ComposedLink";

export default function Page() {
  return (
    <Section>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography variant="h2">404</Typography>
        <Typography variant="body1">Page not found.</Typography>
        <ComposedLink href="/home">Go to home</ComposedLink>
      </Grid>
      <Grid item lg={8}>
        <img
          src="/CheyannaDeNicolaPhotography1381.jpg"
          alt="more of the happy couple"
          width="100%"
          className="rounded-image"
        />
      </Grid>
    </Section>
  );
}
