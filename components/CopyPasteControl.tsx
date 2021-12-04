import React, { useState } from "react";

import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface Props extends ButtonProps {
  content: string;
}

export default function CopyPasteControl({ content, ...props }: Props) {
  const [message, setMessage] = useState<string | null>(null);

  const onSuccess = async () => {
    setMessage("Copied to clipboard!");
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  const onError = async () => {
    setMessage("Error copying to clipboard");
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      onSuccess();
    } catch (err) {
      onError();
    }
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 3 }}
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ mb: { xs: message ? 3 : 0, sm: 0 } }}
    >
      <Button
        variant="contained"
        endIcon={<ContentCopyIcon />}
        onClick={() => copyToClipboard()}
        {...props}
      >
        {content}
      </Button>
      {message && <Typography variant="body2">{message}</Typography>}
    </Stack>
  );
}
