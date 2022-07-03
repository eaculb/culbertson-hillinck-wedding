import React, { useEffect, useState } from "react";
const axios = require("axios").default;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import EventForm from "@/components/EventForm";
import Section from "@/components/Section";
import PartyName from "@/components/PartyName";
import { Party } from "@/utils/types";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

export default function Page() {
  const { query } = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [party, setParty] = useState<Party | null>(null);

  useEffect(() => {
    async function execute() {
      const pid = query.partyId;
      if (!pid) {
        return;
      }
      const res = await axios.get(`/api/parties/${pid}`);

      setParty(res.data);
      setLoading(false);
    }
    execute();
  }, [query]);

  if (loading) {
    return (
      <Section>
        <Grid item xs={12}>
          <Typography variant="h2">RSVP</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        </Grid>
      </Section>
    );
  }

  if (!party) {
    return (
      <Section>
        <Grid item xs={12}>
          <Typography variant="h2">RSVP</Typography>
          <Typography variant="body1">Party not found.</Typography>
        </Grid>
      </Section>
    );
  }

  return (
    <>
      <Section>
        <Grid item xs={12}>
          <Typography variant="h2">RSVP</Typography>
          <Typography variant="h3">
            <PartyName party={party} />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <EventForm {...party.guestA} />
        </Grid>
        {party.guestB && (
          <Grid item xs={12} sm={6} lg={3}>
            <EventForm {...party.guestB} />
          </Grid>
        )}
      </Section>
      {/* @ts-ignore */}
      <Section></Section>
    </>
  );
}
