import Grid from "@mui/material/Grid";
import MatLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Section from "@/components/Section";

export default function Page() {
  return (
    <Section>
      <Grid item xs={12} lg={6} sx={{ mb: 3 }}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          The Venue
        </Typography>
        <Typography variant="h6">Milk & Roses</Typography>
        <Typography variant="subtitle2">
          1140 Manhattan Ave <br /> Brooklyn, NY 11222
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <MatLink
            href="https://milkandrosesbk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </MatLink>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Both the ceremony and the reception will be held at Milk & Roses, an
          Italian restaurant in the Greenpoint neighborhood of Brooklyn.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Milk & Roses has an interior designed like a library, with a bit of a
          vintage vibe. The courtyard space is a rose garden with a small
          greenhouse.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          They have very recently relocated to a larger space, so photos you
          find online may be outdated!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} lg={3} mt={{ xs: 0, lg: 3 }}>
        <img
          src="/mr1.jpg"
          alt="milk and roses Brooklyn"
          width="100%"
          className="rounded-image"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3} mt={{ xs: 0, lg: 9 }}>
        <img
          src="/mr2.jpg"
          alt="milk and roses Brooklyn"
          width="100%"
          className="rounded-image"
        />
      </Grid>
    </Section>
  );
}
