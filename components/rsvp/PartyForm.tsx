import React, { useState } from "react";
import { useRouter } from "next/router";
const axios = require("axios").default;

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

import StyledButton from "@/components/StyledButton";
import { Party } from "@/utils/types";
import { CircularProgress } from "@mui/material";

export default function PartyForm({ party }: { party: Party }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // Will I regret not using yup? Probably
  const [email, setEmail] = useState<string | null>(party.email ?? null);
  const [dietaryRestriction, setDietaryRestriction] = useState<boolean>(
    party.dietaryRestriction ?? false
  );
  const [dietaryRestrictionDetail, setDietaryRestrictionDetail] = useState<
    string | null
  >(party.dietaryRestrictionDetail ?? null);
  const [hotelHelp, setHotelHelp] = useState<boolean>(party.hotelHelp ?? false);
  const [other, setOther] = useState<string | null>(party.other ?? null);

  const validateAndConfirm = () => {
    setSubmitting(true);
    try {
      axios.put(`/api/parties/${party.id}`, {
        email,
        dietaryRestriction,
        dietaryRestrictionDetail,
        hotelHelp,
        other,
      });
      router.push("/rsvp/-/confirm");
    } catch (e) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          pt: 2,
          pb: 3,
          borderRadius: "20px",
        }}
      >
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Other party information
        </Typography>
        <form>
          <Stack
            direction="column"
            spacing={2}
            justifyContent="flex-start"
            alignItems="stretch"
          >
            <TextField
              id="email"
              size="small"
              label="(Optional) best email contact for your party"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={dietaryRestriction}
                  onChange={(e) => setDietaryRestriction(e.target.checked)}
                />
              }
              label="A member of my party has a dietary restriction (aside from vegetarianism; our appetizer is vegetarian and we will have vegetarian options for both canapes and entree)"
              labelPlacement="start"
              sx={{
                justifyContent: "space-between",
              }}
            />
            {dietaryRestriction && (
              <TextField
                id="dietary-restriction-detail"
                label="Dietary restriction detail"
                multiline
                rows={2}
                value={dietaryRestrictionDetail}
                onChange={(e) => setDietaryRestrictionDetail(e.target.value)}
              />
            )}
            <FormControlLabel
              control={
                <Checkbox
                  checked={hotelHelp}
                  onChange={(e) => setHotelHelp(e.target.checked)}
                />
              }
              label="I would like help finding a hotel roommate"
              labelPlacement="start"
              sx={{ justifyContent: "space-between" }}
            />
            <Box sx={{ width: "100%" }}>
              <Divider
                sx={{
                  my: 3,
                  borderColor: (theme) => theme.palette.primary.main,
                }}
              />
            </Box>
            <TextField
              id="other"
              label="Anything else we should know?"
              multiline
              rows={3}
              value={other}
              onChange={(e) => setOther(e.target.value)}
            />
            <StyledButton
              variant="contained"
              onClick={validateAndConfirm}
              disabled={submitting}
              sx={{
                width: { xs: "100%", md: "auto" },
                alignSelf: { md: "flex-end" },
              }}
            >
              {submitting ? <CircularProgress /> : "Submit"}
            </StyledButton>
          </Stack>
        </form>
      </Box>
      <Snackbar
        open={error}
        message={"Sorry, there was a problem submitting. Please try again."}
        autoHideDuration={5000}
        onClose={() => setError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      />
    </>
  );
}
