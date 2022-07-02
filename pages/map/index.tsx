import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Section from "@/components/Section";

export default function Page() {
  return (
    <Section>
      <Grid item xs={12} md={4}>
        <Typography variant="h2">Map</Typography>
        <Typography variant="body2">
          This map shows the event locations for the weekend. "Star" this map to
          save the list to your Google Maps.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} sx={{ position: "relative", height: "80vh" }}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1UvTIUGnGIFvVO7U4zer3kfHFcRMkqvw&ll=40.739831944522294%2C-73.95185343609539&z=14"
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </Grid>
    </Section>
  );
}
