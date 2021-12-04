import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface Props {
  date: string;
  children: React.ReactNode;
}

export default function DaySchedule({ date, children }: Props) {
  return (
    <Stack direction={{ xs: "column", lg: "row" }} sx={{ mb: 2 }}>
      <Typography variant="h6" width="280px">
        {date}
      </Typography>
      <Stack direction="column">{children}</Stack>
    </Stack>
  );
}
