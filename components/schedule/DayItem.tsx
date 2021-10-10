import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  time: string;
  event: string;
}

export default function DayItem({ time, event }: Props) {
  return (
    <Box>
      <Box sx={{ width: "150px", display: "inline-block" }}>
        <Typography variant="body1">{time}</Typography>
      </Box>
      <Box sx={{ display: "inline-block" }}>
        <Typography variant="body1">{event}</Typography>
      </Box>
    </Box>
  );
}
