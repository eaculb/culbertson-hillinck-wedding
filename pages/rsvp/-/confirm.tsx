import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Section from "@/components/Section";

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
        <Typography variant="h2">RSVP</Typography>
        <Typography variant="body1">
          Thank you! You can return to this site to update your response anytime
          before August 10, 2022.
        </Typography>
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
