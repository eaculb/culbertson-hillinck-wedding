import React, { useEffect, useState } from "react";
const axios = require("axios").default;

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Section from "@/components/Section";
import PartyName from "@/components/PartyName";
import { Party } from "@/utils/types";
import { useRouter } from "next/router";

export default function Page() {
  const { query } = useRouter();
  const [party, setParty] = useState<Party | null>(null);

  useEffect(() => {
    async function execute() {
      const weird = query.partyId;
      if (!weird) {
        return;
      }
      const res = await axios.get(`/api/party/${weird}`);
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
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="subtitle1">{party.guestA.name}</Typography>
        </Grid>
        {party?.guestB && (
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle1">{party.guestB.name}</Typography>
          </Grid>
        )}
      </Section>
      {/* @ts-ignore */}
      <Section></Section>
    </>
  );
}
