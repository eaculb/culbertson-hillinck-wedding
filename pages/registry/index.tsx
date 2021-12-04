import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Section from "@/components/Section";

export default function Page() {
  return (
    <Section>
      <Grid item xs={12} md={4}>
        <Typography variant="h2">Registry</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          By our wedding date, we will have been living together and building a
          home together for over three years! We also have friends and family
          with widely varying means and life situations. Your presence at our
          wedding is an enormous present in itself.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          If it makes you happy to purchase a gift or contribute towards an
          experience we can have together, we are very grateful for that as
          well.
        </Typography>
        <Typography variant="body1" color="primary" sx={{ mb: 2 }}>
          Our registry is under construction. Please check back soon for links.
        </Typography>
        <img
          src="/CheyannaDeNicolaPhotography1231.jpg"
          alt="more of the happy couple"
          width="100%"
          style={{ borderRadius: 10 }}
        />
      </Grid>
    </Section>
  );
}
