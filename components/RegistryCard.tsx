import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
  sx?: SxProps;
}

export default function RegistryCard({ title, sx, children }: Props) {
  return (
    <Box
      sx={{
        border: `2px solid`,
        borderColor: (theme) => theme.palette.primary.main,
        borderRadius: "10px",
        padding: (theme) => theme.spacing(4),
        height: "100%",
        width: "100%",
        ...sx,
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
