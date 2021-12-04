import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import RsvpButton from "@/components/RsvpButton";
import { theme } from "@/src/theme";

export default function HomePage() {
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid item xs={6} md={3}>
        <img
          src="/CheyannaDeNicolaPhotography0847.jpg"
          alt="more of the happy couple"
          width="100%"
          style={{ borderRadius: 10 }}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <img
          src="/CheyannaDeNicolaPhotography0854.jpg"
          alt="more of the happy couple"
          width="100%"
          style={{ borderRadius: 10 }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Ready to celebrate?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Whether you’re able to attend the whole weekend or just the day of,
          we’ll be honored to have you there.
        </Typography>
        <RsvpButton variant="contained" fullWidth={isSmall} />
      </Grid>
    </>
  );
}
