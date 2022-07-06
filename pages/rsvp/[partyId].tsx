import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
const axios = require("axios").default;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

import Section from "@/components/Section";
import EventForm from "@/components/rsvp/EventForm";
import PartyName from "@/components/rsvp/PartyName";
import PartyForm from "@/components/rsvp/PartyForm";
import { Party } from "@/utils/types";

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

  const lastUpdated = useMemo(() => {
    if (!party) {
      return undefined;
    }
    const { updated } = party;
    const formatted: Date | undefined = updated ? new Date(updated) : undefined;
    return formatted;
  }, [party]);

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
          {lastUpdated && (
            <Typography variant="subtitle1">
              {`Last submitted ${lastUpdated.toLocaleDateString()}`}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <EventForm {...party.guestA} />
        </Grid>
        {party.guestB && (
          <Grid item xs={12} sm={6} lg={3}>
            <EventForm {...party.guestB} />
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
          <PartyForm party={party} />
        </Grid>
      </Section>
    </>
  );
}
