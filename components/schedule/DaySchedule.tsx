import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface Props {
  date: string;
  children: React.ReactNode;
}

export default function DaySchedule({ date, children }: Props) {
  return (
    <Grid item>
      <Grid container>
        <Grid item xs={12} sm={3} sx={{ mb: 1 }}>
          <Typography variant="h6">{date}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
