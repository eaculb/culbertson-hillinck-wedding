import Link from "next/link";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MatLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Section from "@/components/Section";
import { theme } from "@/src/theme";

const AIRBNB_SEARCH_LINK =
  "https://www.airbnb.com/s/Greenpoint--Brooklyn--NY--USA/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Greenpoint%2C%20Brooklyn%2C%20NY%2C%20USA&place_id=ChIJs1ja4UhZwokRbkVU6bKHDHI&checkin=2022-09-23&checkout=2022-09-25";
const WYNDHAM_LINK =
  "https://www.wyndhamhotels.com/wyndham-garden/long-island-city-new-york/wyndham-garden-long-island-city/rooms-rates?&checkInDate=09/23/2022&checkOutDate=09/25/2022&groupCode=092322CUL";

export default function Page() {
  return (
    <Section>
      <Grid item xs={12} md={6}>
        <Stack direction="column" display="flex" justifyContent="center">
          <Typography variant="h2">Getting to Brooklyn</Typography>
          <img
            src="/CheyannaDeNicolaPhotography0926.jpg"
            alt="more of the happy couple"
            width="100%"
            className="rounded-image"
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          By air
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Guests should look for flights to LaGuardia Airport (LGA).
          Internationally traveling guests may need to fly into John F. Kennedy
          International Airport (JFK).
        </Typography>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6}>
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
                LGA is about 20 minutes driving from The Box House and Milk &
                Roses, and 15 minutes from the Wyndham Garden.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
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
                JFK is about 30 minutes driving from both The Box House and Milk
                & Roses and the Wyndham Garden.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h6" sx={{ mt: 5 }}>
          By train
        </Typography>
        <Typography variant="body1">
          The Amtrak runs many lines into New York Penn Station (NYP) each day.
          Fares from other Atlantic coast cities can be as low as $29 each way
          if you purchase early enough!
        </Typography>
        <Typography variant="body1">
          From NYP, there are many options for taking the subway to either of
          the hotels. Let Lizzie know if you want any help planning your route.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 7,
          }}
        >
          <img src="/doodles/4.svg" width="100px" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h2">Hotels</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1">
          We have set up room blocks at the following hotels. The Box House is
          on the same block as the wedding venue (and Lizzie & BJ will be
          staying there). There will be a shuttle provided from the Wyndham
          Garden to Milk & Roses for the ceremony and back to the Wyndham Garden
          after the reception.
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          sx={{ mt: 2, mb: 3 }}
        >
          <Grid item xs={12} sm={6}>
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
              <MatLink
                href="https://goo.gl/maps/G4njt3uwkHRvKxPLA"
                color="primary"
                variant="body2"
                underline="hover"
                target="blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </MatLink>
              <Divider color="white" sx={{ mx: 5, my: 3 }} />
              <Typography variant="body2">
                {"See "}
                <Link href="travel/box-house">
                  <MatLink
                    href="travel/box-house"
                    color="primary"
                    underline="hover"
                  >
                    booking instructions
                  </MatLink>
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                border: `2px solid`,
                borderColor: theme.palette.complementary.main,
                borderRadius: "10px",
                padding: theme.spacing(2),
                height: "100%",
              }}
            >
              <Typography variant="h6">Wyndham Garden LIC</Typography>
              <Typography variant="body2">44-29 9th Street</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Long Island City, New York 11101
              </Typography>
              <MatLink
                href="https://g.page/wyndham-garden-long-island-city?share"
                color="primary"
                variant="body2"
                underline="hover"
                target="blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </MatLink>
              <Divider color="white" sx={{ mx: 5, my: 3 }} />
              <Typography variant="body2">
                Book using{" "}
                <MatLink
                  href={WYNDHAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this link
                </MatLink>{" "}
                or use code 092322CUL.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body1">
          Guests are free to book accommodations at a different hotel or AirBnb
          in the area — there are many beautiful places one could stay!{" "}
          <MatLink
            href={AIRBNB_SEARCH_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            See AirBnbs
          </MatLink>
        </Typography>
      </Grid>
    </Section>
  );
}
