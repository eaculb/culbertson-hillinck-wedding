import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Section from "@/components/Section";
import ZolaEmbed from "@/components/ZolaEmbed";

export default function Page() {
  return (
    <Section>
      <Grid item xs={12}>
        <Typography variant="h2">Registry</Typography>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container>
          <Grid item xs={12} md={6} lg={12} sx={{ pr: 3 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              By our wedding date, we will have been living together and
              building a home together for over three years! We also have
              friends and family with widely varying means and life situations.
              Your presence at our wedding is an enormous present in itself.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If it actively makes you happy to purchase a gift or contribute
              towards an experience we can have together, we will be very
              grateful! And if not, we will be happy to simply celebrate with
              you!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <img
              src="/CheyannaDeNicolaPhotography1231.jpg"
              alt="more of the happy couple"
              width="100%"
              className="rounded-image"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Box sx={{ height: "70vh" }}>
          <ZolaEmbed />
        </Box>
      </Grid>
    </Section>
  );
}
