import React, { useEffect, useState } from "react";
const axios = require("axios").default;

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import EventForm from "@/components/EventForm";
import Section from "@/components/Section";
import PartyName from "@/components/PartyName";
import { Party } from "@/utils/types";
import { useRouter } from "next/router";

export default function Page() {
  const { query } = useRouter();
  const [party, setParty] = useState<Party | null>(null);

  useEffect(() => {
    async function execute() {
      const pid = query.partyId;
      if (!pid) {
        return;
      }
      const res = await axios.get(`/api/party/${pid}`);
      console.log(res);
      setParty(res.data);
    }
    execute();
  }, [query]);

  if (!party) {
    return (
      <Section>
        <Grid item xs={12}>
          <Typography variant="body1">Page not found.</Typography>
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
