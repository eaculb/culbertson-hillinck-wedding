import Grid from "@mui/material/Grid";
import MatLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import CopyPasteControl from "@/components/CopyPasteControl";
import Section from "@/components/Section";

export default function Page() {
  return (
    <Section>
      <Grid item xs={12} md={6} sx={{ mb: 3 }}>
        <Typography variant="h2">Box House Hotel</Typography>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Booking Instructions
        </Typography>
        <img
          src="/box-house-1.jpg"
          alt="the box house hotel"
          width="100%"
          className="rounded-image"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1">
          The Box House Hotel is a cool & funky hotel on the same block as our
          wedding venue! BJ and Lizzie will be staying here for the weekend
          along with our parents.
        </Typography>
        <Typography variant="body1">
          We have received a group discount of 10% for the weekend. To book a
          room with this discount, follow these instructions.
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              {"Go to the Box House Hotel's "}
              <MatLink
                href="https://theboxhousehotel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                website
              </MatLink>
              {' and click "Book Now".'}
            </Typography>
          </li>
          <li>
            <Typography>
              IMPORTANT: Do not yet enter anything into the "Access
              code/IATA/Promo Code" box.
            </Typography>
          </li>
          <li>
            <Typography>
              {
                'After finding the room you want and clicking "book", you will be prompted to fill out a booking form. In "Enter Guest Information" > "Request/remark", paste the following code:'
              }
            </Typography>
            <CopyPasteControl
              content="Culbertson/Hillinck Wedding - 322525"
              sx={{ my: 2 }}
            />
          </li>
          <li>
            Please note that when you first book online, it won't reflect the
            discount, but when they process your reservation they'll do it with
            the discount included.
          </li>
          <li>
            If you have any problems at all, contact our group manager Carolyn
            at{" "}
            <MatLink
              href="mailto:groups@theboxhousehotel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              groups@theboxhousehotel.com
            </MatLink>
          </li>
        </ul>
      </Grid>
    </Section>
  );
}
