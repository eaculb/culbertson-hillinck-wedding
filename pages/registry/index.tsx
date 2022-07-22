import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";

import Section from "@/components/Section";
import RegistryCard from "@/components/RegistryCard";
import Link from "@/components/ComposedLink";

const ArrowLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href} target="_blank" sx={{ mb: 2 }}>
      <Stack
        direction="row"
        sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      >
        <Typography>{label}</Typography>
        <ArrowForward sx={{ fontSize: 20, ml: 1 }} />
      </Stack>
    </Link>
  );
};

export default function Page() {
  return (
    <Box
      sx={{
        px: { xs: "20px", md: "5vw" },
        width: "100%",
        display: "grid",
        gridTemplateRows: {
          xs: "min-content min-content auto auto 1fr 1fr",
          md: "min-content min-content auto auto",
        },
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
        gridColumnGap: (theme) => theme.spacing(4),
        gridRowGap: (theme) => theme.spacing(2),
      }}
    >
      <Box sx={{ gridColumn: 1, gridRow: 1 }}>
        <Typography variant="h2">Registry</Typography>
      </Box>
      <Box sx={{ gridColumn: 1, gridRow: 2 }}>
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            By our wedding date, we will have been living together and building
            a home together for over three years! We also have friends and
            family with widely varying means and life situations. Your presence
            at our wedding is an enormous present in itself.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            If it actively makes you happy to purchase a gift or contribute
            towards an experience we can have together, we will be very
            grateful! And if not, we will be happy to simply celebrate with you!
          </Typography>
        </Box>
      </Box>
      <Box sx={{ gridColumn: 1, gridRow: "3 / span 2" }}>
        <img
          src="/CheyannaDeNicolaPhotography1231.jpg"
          alt="more of the happy couple"
          width="100%"
          className="rounded-image"
        />
      </Box>
      <RegistryCard
        title="Primary Registry"
        sx={{
          gridColumn: { xs: 1, md: 2 },
          gridRow: { xs: 5, md: "2 / span 1", lg: "2 /span 2" },
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          We've signed up with Zola for most of our registry. This also includes
          some "experience" options as our favorite thing is spending time with
          each other! There are also some "contribute however much or little you
          wish" items here.
        </Typography>
        <ArrowLink
          label="Open Zola registry"
          href="https://www.zola.com/registry/culbertsonhillinckwedding"
        />
      </RegistryCard>
      <RegistryCard
        title="Bar Items"
        sx={{
          gridColumn: { xs: 1, md: 2, lg: 3 },
          gridRow: { xs: 6, md: "3 / span 1", lg: "2 /span 2" },
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          We have a few additional items for hosting/bar fun at Anthropologie
          and Pottery Barn. Take a look if you're interested, and drinks are on
          us next time you come to visit!
        </Typography>
        <ArrowLink
          label="Open Anthropologie registry"
          href="https://www.anthropologie.com/registry/listing?registryId=7CD595DD54BE"
        />
        <ArrowLink
          label="Open Pottery Barn registry"
          href="https://www.potterybarn.com/registry/mpw27z5nvr/registry-list.html"
        />
      </RegistryCard>
    </Box>
  );
}
