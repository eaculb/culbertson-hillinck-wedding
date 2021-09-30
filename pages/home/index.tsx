import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme, Theme } from "@mui/system";

export default function HomePage() {
  const theme: Theme = useTheme();
  return (
    <>
      <Grid
        container
        sx={{ py: 5, my: 5, height: `calc(100vh-${theme.appBarHeight})` }}
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h1">Lizzie & BJ</Typography>
          <Typography variant="h2">09.24.2022</Typography>
          <Typography variant="h4">Brooklyn, NY</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="/us-0.jpg"
            alt="the happy couple"
            width="100%"
            style={{ borderRadius: 10 }}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ py: 5, minHeight: "50vh" }} alignItems="center">
        <Grid item xs={12} sm={7}>
          {/* image yay */}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h4">
            We are getting married and we'd love for you to be there!
          </Typography>
          <Typography variant="body1">
            We hope we can share some of our joy with you as we formally commit
            to our shared life together (and sign the very important paperwork
            that will let us take care of each other to the fullest extent of
            the law)
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
