import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface Props {
  time: string;
  event: string;
}

export default function DayItem({ time, event }: Props) {
  return (
    <Stack direction="row" sx={{ mb: 1 }}>
      <Typography
        variant="body1"
        color="complementary"
        sx={{ minWidth: "120px" }}
      >
        {time}
      </Typography>
      <Typography variant="body1">{event}</Typography>
    </Stack>
  );
}
