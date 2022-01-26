import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

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
        <Typography variant="subtitle1" color="primary">
          These are estimates. Check back soon for confirmed times!
        </Typography>
        <Stack direction="column">
          <DaySchedule date="September 23, 2022">
            <DayItem time="~3:00 PM" event="Hotel Check-In" />
            <DayItem time="~6:00 PM" event="Rehearsal Dinner" />
          </DaySchedule>
          <DaySchedule date="September 24, 2022">
            <DayItem time="5:30 PM" event="Ceremony" />
            <DayItem time="following" event="Reception" />
          </DaySchedule>
          <DaySchedule date="September 25, 2022">
            <DayItem
              time="~10AM"
              event="Goodbye Bagels (drop by any time between 10 and noon!)"
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
