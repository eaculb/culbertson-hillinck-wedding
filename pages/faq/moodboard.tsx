import Head from "next/head";
import NextLink from "next/link";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import Section from "@/components/Section";
import { theme } from "@/src/theme";

export default function Page() {
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Head>
        <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
      </Head>
      <Section>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Dress Code Moodboard
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Stuck on what to wear? Use this moodboard as inspiration! This
            is merely a jumping-off point though; we want you to be comfortable
            and have fun.
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            One important thing to note is that the outdoor portion of the venue
            is a garden. If you choose to wear heels, please make sure they are
            wide enough that they won't sink into the ground!
          </Typography>
          <NextLink href="/faq" passHref>
            <Link href="/faq" color="primary" underline="hover" variant="body2">
              Back to FAQ
            </Link>
          </NextLink>
        </Grid>
        <Grid item xs={12} md={6} sx={{}}>
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="900"
            data-pin-scale-height="400"
            data-pin-scale-width="60"
            href="https://www.pinterest.com/eaculb/wedding-guest-dress-code-moodboard/"
          ></a>
        </Grid>
      </Section>
    </>
  );
}
