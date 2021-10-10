import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme, Theme } from "@mui/system";

import Section from "@/components/Section";
import { Link } from "@mui/material";

const AIRBNB_SEARCH_LINK =
  "https://www.airbnb.com/s/Greenpoint--Brooklyn--NY--USA/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Greenpoint%2C%20Brooklyn%2C%20NY%2C%20USA&place_id=ChIJs1ja4UhZwokRbkVU6bKHDHI&checkin=2022-09-23&checkout=2022-09-25";

export default function Page() {
  const theme: Theme = useTheme();
  return (
    <>
      <Section>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Typography variant="h2">Getting to Brooklyn</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              By air
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Guests should look for flights to LaGuardia Airport (LGA).
              Internationally traveling guests may need to fly into John F.
              Kennedy International Airport (JFK).
            </Typography>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    border: `2px solid`,
                    borderColor: theme.palette.primary.main,
                    borderRadius: "10px",
                    padding: theme.spacing(2),
                    height: "100%",
                  }}
                >
                  <Typography variant="body2">
                    LGA is about 20 minutes driving from The Box House and Milk
                    & Roses, and 30 minutes from the Hampton Inn.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    border: `2px solid`,
                    borderColor: theme.palette.complementary.main,
                    borderRadius: "10px",
                    padding: theme.spacing(2),
                    height: "100%",
                  }}
                >
                  <Typography variant="body2">
                    JFK is about 30 minutes driving from The Box House and Milk
                    & Roses, and 45 minutes from the Hampton Inn.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ mt: 5 }}>
              By train
            </Typography>
            <Typography variant="body1">
              The Amtrak runs many lines into New York Penn Station (NYP) each
              day. Fares from other Atlantic coast cities can be as low as $29
              each way if you purchase early enough!
            </Typography>
            <Typography variant="body1">
              From NYP, there are many options for taking the subway to either
              of the hotels. Let Lizzie know if you want any help planning your
              route.
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Typography variant="h2">Hotels</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="body1">
              We have set up room blocks at the following hotels. The Box House
              is on the same block as the wedding venue (and Lizzie & BJ will be
              staying there). There will be a shuttle provided from the Hampton
              Inn to Milk & Roses for the ceremony and back to the Hampton Inn
              after the reception.
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              sx={{ mt: 2, mb: 3 }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    border: `2px solid`,
                    borderColor: theme.palette.primary.main,
                    borderRadius: "10px",
                    padding: theme.spacing(2),
                    height: "100%",
                  }}
                >
                  <Typography variant="h6">The Box House Hotel</Typography>
                  <Typography variant="body2">77 Box St</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Brooklyn, NY 11222
                  </Typography>
                  <Typography variant="body2">
                    Something something here are instructions
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    border: `2px solid`,
                    borderColor: theme.palette.complementary.main,
                    borderRadius: "10px",
                    padding: theme.spacing(2),
                    height: "100%",
                  }}
                >
                  <Typography variant="h6">The Hampton Inn</Typography>
                  <Typography variant="body2">125 Flatbush Ave Ext</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Brooklyn, NY 11201
                  </Typography>
                  <Typography variant="body2">
                    Something something here's a link
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="body1">
              Guests are free to book accommodations at a different hotel or
              AirBnb in the area — there are many beautiful places one could
              stay!{" "}
              <Link href={AIRBNB_SEARCH_LINK} underline="hover" target="_blank">
                See AirBnbs
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
