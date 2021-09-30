import Link from "next/link";
import { styled, darken } from "@mui/system";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: theme.palette.primary.main,
  backgroundColor: "transparent",
  border: `2px solid ${theme.palette.primary.main}`,
  "&:hover": {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  "&:active": {
    color: theme.palette.primary.contrastText,
    borderColor: darken(theme.palette.primary.main, 0.2),
    backgroundColor: darken(theme.palette.primary.main, 0.2),
  },
}));

const RsvpButton = () => (
  <Link href="/rsvp">
    <StyledButton>RSVP</StyledButton>
  </Link>
);

export default RsvpButton;
