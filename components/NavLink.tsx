import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import MatLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface Props {
  path: string;
  label: string;
  variant?: "outlined" | "contained" | "text";
  color?: "primary" | "secondary" | "info";
}

export default function NavLink({ path, label, variant, color }: Props) {
  const router = useRouter();

  const routerBasedProps =
    router.pathname === path ? { borderBottom: "1px solid" } : {};

  return (
    <Link href={path}>
      <MatLink
        href={path}
        color={color || "secondary"}
        variant="button"
        underline="none"
        sx={{ pb: 0.5, ...routerBasedProps }}
      >
        {label}
      </MatLink>
    </Link>
  );
}
