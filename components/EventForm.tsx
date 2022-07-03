import React, { useCallback, useEffect, useState } from "react";
const axios = require("axios").default;

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import RadioGroup, { RadioGroupProps } from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

import { Status } from "@/utils/types";
import { Box, Stack, Theme } from "@mui/material";

type EventProps = Omit<RadioGroupProps, "id" | "label"> & {
  id: string;
  label: string;
};

const EventGroup = ({ id, label, ...props }: EventProps) => {
  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={id}
        defaultValue={undefined}
        name={`${id}-group`}
        {...props}
      >
        <FormControlLabel
          value={true}
          control={<Radio />}
          label="Will attend"
        />
        <FormControlLabel
          value={false}
          control={<Radio />}
          label="Will not attend"
        />
      </RadioGroup>
    </FormControl>
  );
};

interface Props {
  id: string;
  name: string;
}

export default function EventForm({ id: guestId, name: guestName }: Props) {
  const [status, setStatus] = useState<Status>({
    picnic: null,
    wedding: null,
    bagels: null,
  });
  console.log(guestId);

  const updateStatus = useCallback(
    (key: keyof Status) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newStatus = { ...status, [key]: e.target.value };
      setStatus(newStatus);
      axios.put(`/api/guests/${guestId}`, { state: newStatus });
    },
    [guestId, status, setStatus]
  );

  return (
    <Box
      sx={{
        pt: 2,
        pb: 3,
        borderRadius: "20px",
      }}
    >
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {guestName}
      </Typography>
      <form>
        <Stack direction="column" spacing={2}>
          <EventGroup
            id="picnic"
            label="Welcome Picnic"
            value={status.picnic}
            onChange={updateStatus("picnic")}
          />
          <EventGroup
            id="wedding"
            label="Wedding Ceremony & Reception"
            value={status.wedding}
            onChange={updateStatus("wedding")}
          />
          <EventGroup
            id="bagels"
            label="Goodbye Bagels"
            value={status.bagels}
            onChange={updateStatus("bagels")}
          />
        </Stack>
      </form>
    </Box>
  );
}
