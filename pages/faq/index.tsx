import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

import Section from "@/components/Section";
import QuestionAnswer from "@/components/faq/QuestionAnswer";
import { theme } from "@/src/theme";

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderColor: theme.palette.primary.main,
}));

const PhotoGrid = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={12} lg={6}>
      <img
        src="/CheyannaDeNicolaPhotography1104.jpg"
        alt="more of the happy couple"
        width="100%"
        style={{ borderRadius: 10 }}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={12} lg={6}>
      <img
        src="/CheyannaDeNicolaPhotography0979.jpg"
        alt="more of the happy couple"
        width="100%"
        style={{ borderRadius: 10 }}
      />
    </Grid>
    <Grid item xs={12} display="flex" justifyContent="center" sx={{ my: 7 }}>
      <img src="/doodles/6.svg" width="100px" />
    </Grid>
    <Grid item xs={12} sm={6} md={12} lg={6}>
      <img
        src="/CheyannaDeNicolaPhotography1316.jpg"
        alt="more of the happy couple"
        width="100%"
        style={{ borderRadius: 10 }}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={12} lg={6}>
      <img
        src="/CheyannaDeNicolaPhotography1140.jpg"
        alt="more of the happy couple"
        width="100%"
        style={{ borderRadius: 10 }}
      />
    </Grid>
  </Grid>
);

export default function Page() {
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Section>
      <Grid item xs={12} md={4} lg={6}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          FAQ
        </Typography>
        {!isSmall && <PhotoGrid />}
      </Grid>
      <Grid item xs={12} md={8} lg={6}>
        <QuestionAnswer
          question="Is the wedding indoors or outdoors?"
          answer="The venue has both an indoor and outdoor (garden) space. The ceremony and dinner will both be in the garden. The bar will be inside, and guests can be in either space during cocktail hour."
        />
        <StyledDivider />
        <QuestionAnswer
          question="Are children welcome?"
          answer="We ask that the ceremony and reception be child-free. Children are welcome at the goodbye brunch and any informal events on Friday. If you need help finding childcare for Saturday evening, we are happy to help."
        />
        <StyledDivider />
        <QuestionAnswer
          question="What's the bar situation?"
          answer="Open bar, baby. There will be beer, wine, and cocktails available to order. There were also be EANABs (Equally Attractive Non-Alcoholic Beverages). Enjoy!"
        />
        <StyledDivider />
        <Box>
          <Typography variant="h6">What should I wear?</Typography>
          <Typography variant="body2">
            We are going for a slightly elevated garden party vibe. We know
            wedding dress codes can be very confusing, so here are some ideas:
          </Typography>
          <List dense={true}>
            <ListItem>
              <ListItemText primary="- A wrap dress or midi dress (or midi wrap dress). Floral, earthy, or muted tones. Maybe velvet or satin if you're feeling adventurous!" />
            </ListItem>
            <ListItem>
              <ListItemText primary="- An LBD (Little Black Dress)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="- An elevated jumpsuit" />
            </ListItem>
            <ListItem>
              <ListItemText primary="- Slacks and a button down shirt, tie optional" />
            </ListItem>
          </List>
          <Typography variant="body2" sx={{ mb: 1 }}>
            One important thing to note is that the outdoor portion of the venue
            is a garden. If you choose to wear heels, please make sure they are
            wide enough that they won't sink into the ground!
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Run your idea past Lizzie if you're worried; we don't want anyone to
            stress over what to wear!
          </Typography>
          <Typography variant="body2" color="complementary">
            We're working on a moodboard if you need some inspiration -- check
            back soon!
          </Typography>
        </Box>
        <StyledDivider />
        <QuestionAnswer
          question="Will there be vegan/vegetarian/gluten-free food options?"
          answer="There will be vegetarian options both for passed hors d'oeuvres during cocktail hour and for the dinner. If you require any food acommodations beyond vegetarian options please make a note on your RSVP and we will do our best to find a solution with you."
        />
        <StyledDivider />
        <QuestionAnswer
          question="Do you have a wedding hashtag?"
          answer="No, but you're welcome to use any ideas you have. Terrible answers only pls."
        />
        <StyledDivider />
        <Box>
          <Typography variant="h6">Still have a question?</Typography>
          <Link
            href="mailto:info@culbertsonhillinckwedding.com"
            target="_blank"
            underline="hover"
          >
            Send us an email!
          </Link>
        </Box>
      </Grid>
      {isSmall && (
        <Grid item xs={12}>
          <PhotoGrid />
        </Grid>
      )}
    </Section>
  );
}
