import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme, Theme } from "@mui/system";

import Section from "@/components/Section";
import DaySchedule from "@/components/schedule/DaySchedule";
import DayItem from "@/components/schedule/DayItem";
import RsvpButton from "@/components/RsvpButton";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HomePage() {
  const theme: Theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Section
        containerSx={{
          mb: 3,
          alignItems: "center",
          height: `calc(100vh-${theme.appBarHeight})`,
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isSmall ? "center" : "flex-start",
            }}
          >
            {isSmall ? (
              <>
                <Typography variant="h1">Lizzie</Typography>
                <Typography variant="h1">& BJ</Typography>
              </>
            ) : (
              <Typography variant="h1">Lizzie & BJ</Typography>
            )}
            <Typography variant="h2">09.24.2022</Typography>
            <Typography variant="h4">Brooklyn, NY</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/us-0.jpg"
            alt="the happy couple"
            width="100%"
            style={{ borderRadius: 10 }}
          />
        </Grid>
      </Section>
      <Section>
        <Grid item xs={12} sm={7}>
          {/* image to come! */}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h4" gutterBottom>
            We are getting married and we'd love for you to be there!
          </Typography>
          <Typography variant="body1">
            We hope we can share some of our joy with you as we formally commit
            to our shared life together (and sign the very important paperwork
            that will let us take care of each other to the fullest extent of
            the law)
          </Typography>
        </Grid>
      </Section>
      <Section>
        <Grid item xs={12}>
          <Typography variant="h2">Schedule</Typography>
          <Typography variant="subtitle1" color="primary">
            These are estimates. Check back soon for confirmed times!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column">
            <DaySchedule date="September 23, 2022">
              <DayItem time="~3:00 PM" event="Hotel Check-In" />
              <DayItem time="~6:00 PM" event="Rehearsal Dinner" />
            </DaySchedule>
            <DaySchedule date="September 24, 2022">
              <DayItem time="5:30 PM" event="Ceremony" />
              <DayItem time="following" event="Reception" />
            </DaySchedule>
            <DaySchedule date="September 23, 2022">
              <DayItem
                time="~10AM-12PM"
                event="Goodbye Bagels (drop by any time!)"
              />
            </DaySchedule>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid item xs={12} md={6}>
          {/* image to come */}
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
      </Section>
    </>
  );
}
