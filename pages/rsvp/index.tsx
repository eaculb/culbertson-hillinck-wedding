import React, { useCallback, useState } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/system";

import Section from "@/components/Section";

export default function Page() {
  const theme = useTheme();

  const [lookupName, setLookupName] = useState<string>("");

  const handleLookupChange = useCallback(
    (e) => setLookupName(e.target.value),
    [setLookupName]
  );

  const handleExecuteLookup = useCallback(
    (e) => {
      e.preventDefault();
      console.log(lookupName);
      setLookupName("");
    },
    [lookupName, setLookupName]
  );

  return (
    <>
      <Section>
        <Grid item xs={12} md={4} lg={6}>
          <Typography variant="h1">RSVP</Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Typography variant="h3">
            We are excited to celebrate with you in whatever capacity you are
            available!
          </Typography>
        </Grid>
      </Section>
      <Section backgroundColor={theme.palette.complementary.main}>
        <Grid item xs={12} md={6} sx={{ pr: 2 }}></Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Please enter the first and last name of one member of your party to
            RSVP.
          </Typography>
          <form>
            <TextField
              id="guest-lookup"
              label="Name"
              variant="standard"
              margin="normal"
              fullWidth
              value={lookupName}
              onChange={handleLookupChange}
            />
            <Button
              variant="contained"
              sx={{ float: "right" }}
              type="submit"
              onClick={handleExecuteLookup}
            >
              Look Up
            </Button>
          </form>
        </Grid>
      </Section>
    </>
  );
}
