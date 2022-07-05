// UNDER CONSTRUCTION

import React, { useCallback, useState } from "react";
const axios = require("axios").default;
import Link from "next/link";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Section from "@/components/Section";
import StyledButton from "@/components/StyledButton";
import PartyName from "@/components/rsvp/PartyName";
import { Party } from "@/utils/types";

export default function Page() {
  const [lookupName, setLookupName] = useState<string>("");
  const [attempted, setAttempted] = useState<boolean>(false);
  const [found, setFound] = useState<Party[]>([]);
  const [error, setError] = useState<boolean>(false);

  const handleLookupChange = useCallback(
    (e) => setLookupName(e.target.value),
    [setLookupName]
  );

  const handleExecuteLookup = useCallback(
    (e) => {
      async function execute() {
        try {
          const res = await axios.get("/api/parties", {
            params: {
              partial: lookupName,
            },
          });
          setFound(res.data);
          setAttempted(true);
        } catch (err) {
          setError(true);
        }
      }
      setError(false);
      e.preventDefault();
      execute();
    },
    [lookupName, setLookupName]
  );

  return (
    <>
      <Section>
        <Grid item xs={12} md={4} lg={6}>
          <Typography variant="h1">RSVP</Typography>
        </Grid>
      </Section>
      {/* @ts-ignore */}
      <Section>
        <Grid item xs={12} md={6} sx={{ py: 3 }}>
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pr: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {attempted ? (
            found.length > 0 ? (
              found.map((party) => (
                <Link href={`/rsvp/${party.id}`} key={party.id}>
                  <StyledButton variant="outlined" sx={{ mb: 2 }}>
                    <PartyName party={party} />
                  </StyledButton>
                </Link>
              ))
            ) : (
              <Typography variant="body2">
                Sorry, no parties were found for that name! Did you type in both
                your first and last names? Shoot Lizzie a text if you can't get
                your name to come up.
              </Typography>
            )
          ) : (
            <></>
          )}
          {error && (
            <Typography variant="body2">
              Sorry, there was an error looking up your party!
            </Typography>
          )}
        </Grid>
      </Section>
    </>
  );
}
