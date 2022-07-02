import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  time: string;
  event: string;
  location: string;
}

export default function DayItem({ time, event, location }: Props) {
  return (
    <Box
      sx={{
        mb: 1,
        ml: 4,
        width: "100%",
        display: "grid",
        gridTemplateColumns: "120px auto",
        gridGap: "20px",
      }}
    >
      <Typography variant="body1" color="complementary">
        {time}
      </Typography>
      <Box>
        <Typography variant="body1">{event}</Typography>
        <Typography variant="body2">{location}</Typography>
      </Box>
    </Box>
  );
}
