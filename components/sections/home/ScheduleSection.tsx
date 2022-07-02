import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import NextLink from "next/link";
import Link from "@mui/material/Link";

import DaySchedule from "@/components/schedule/DaySchedule";
import DayItem from "@/components/schedule/DayItem";
import { theme } from "@/src/theme";

export default function HomePage() {
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!isSmall && (
        <Grid item xs={12} md={3}>
          <Box sx={{ display: "flex", justifyContent: "center", my: 7 }}>
            <img src="/doodles/2.svg" width="100px" />
          </Box>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        md={9}
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">Schedule</Typography>
        <Typography variant="subtitle1">
          {'For a map of all locations, see our '}
          <NextLink href="/map" passHref>
            <Link href="/map" color="primary" underline="hover" variant="subtitle1">
              map
            </Link>
          </NextLink>
        </Typography>
        <Stack direction="column">
          <DaySchedule date="September 23, 2022">
            <DayItem
              time="3:00 PM"
              event="Hotel Check-In"
              location="Box House Hotel, Wyndham Garden LIC"
            />
            <DayItem
              time="5:00 PM"
              event="Welcome Picnic"
              location="WNYC Transmitter Park"
            />
          </DaySchedule>
          <DaySchedule date="September 24, 2022">
            <DayItem time="5:30 PM" event="Ceremony" location="Milk & Roses" />
            <DayItem
              time="6:00 PM"
              event="Cocktail Hour & Reception"
              location="Milk & Roses"
            />
          </DaySchedule>
          <DaySchedule date="September 25, 2022">
            <DayItem
              time="10:00 AM"
              event="Goodbye Bagels (drop by any time between 10 and noon!)"
              location="Box House Hotel (room number TBA)"
            />
          </DaySchedule>
        </Stack>
      </Grid>
      {isSmall && (
        <Grid item xs={12} md={3}>
          <Box sx={{ display: "flex", justifyContent: "center", my: 7 }}>
            <img src="/doodles/2.svg" width="100px" />
          </Box>
        </Grid>
      )}
    </>
  );
}
