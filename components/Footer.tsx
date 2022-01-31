import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import theme from "@/src/theme";

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 0,
        backgroundColor: theme.palette.background.default,
        width: "100%",
        px: { xs: "10px", md: "2vw" },
        py: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Typography sx={{ fontSize: "0.8rem" }}>
        {"Engagement session photography by "}
        <Link
          href="https://cheyannadenicolaphotography.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cheyanna De Nicola Photography
        </Link>
      </Typography>
      <Typography sx={{ fontSize: "0.8rem" }}>
        {"Nature Vectors by "}
        <Link
          href="https://www.vecteezy.com/free-vector/nature"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vecteezy
        </Link>
      </Typography>
      <Typography sx={{ fontSize: "0.8rem" }}>
        Site made with love by Lizzie because she's a nerd
      </Typography>
    </Box>
  );
}
