import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import { theme } from "@/src/theme";

export default function HomePage() {
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        {isSmall ? (
          <>
            <Typography variant="h1">Lizzie</Typography>
            <Typography variant="h1">& BJ</Typography>
          </>
        ) : (
          <Typography variant="h1">Lizzie & BJ</Typography>
        )}
        <Typography variant="h2">09.24.2022</Typography>
        <Typography variant="h4">Brooklyn, NY</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          minHeight: { sx: "40vh", md: "95vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src="/CheyannaDeNicolaPhotography0596.jpg"
          alt="the happy couple"
          width="100%"
          style={{ borderRadius: 10 }}
        />
      </Grid>
    </>
  );
}
