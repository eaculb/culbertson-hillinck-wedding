import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Section from "@/components/Section";

export default function Footer() {
  return (
    <Section>
      <Grid item xs={12} sx={{ my: 2 }}>
        <Typography sx={{ fontSize: "0.8rem" }}>
          {"Engagement session photography by "}
          <Link
            href="https://cheyannadenicolaphotography.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cheyanna De Nicola Photography
          </Link>
        </Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>
          {"Nature Vectors by "}
          <Link
            href="https://www.vecteezy.com/free-vector/nature"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vecteezy
          </Link>
        </Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>
          Site made with love by Lizzie because she's a nerd
        </Typography>
      </Grid>
    </Section>
  );
}
