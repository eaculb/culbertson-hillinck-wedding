import React from "react";
import Link from "next/link";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Props {
  path: string;
  label: string;
  variant?: "outlined" | "contained" | "text";
  color?: "primary" | "secondary" | "info";
}

export default function NavButton({ path, label, variant, color }: Props) {
  return (
    <Link href={path}>
      <Button
        variant={variant || "text"}
        color={color || "secondary"}
        sx={{ ml: 4, mr: 2 }}
      >
        {label}
      </Button>
    </Link>
  );
}
