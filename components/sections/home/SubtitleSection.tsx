import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { theme } from "@/src/theme";

export default function HomePage() {
  return (
    <>
      <Grid item xs={12} sm={7} md={5}>
        <img
          src="/CheyannaDeNicolaPhotography1607.jpg"
          alt="more of the happy couple"
          width="100%"
          style={{ borderRadius: 10 }}
        />
      </Grid>
      <Grid item xs={12} sm={5} md={7}>
        <Typography variant="h4" gutterBottom>
          We are getting married and we'd love for you to be there!
        </Typography>
        <Typography variant="body1">
          We hope we can share some of our joy with you as we formally commit to
          our shared life together (and sign the very important paperwork that
          will let us take care of each other to the fullest extent of the law)
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", my: 7 }}>
          <img src="/doodles/1.svg" width="100px" />
        </Box>
      </Grid>
    </>
  );
}
