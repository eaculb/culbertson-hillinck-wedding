import Link from "next/link";
import { styled, darken, alpha } from "@mui/system";
import Button, { ButtonProps } from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-outlined": {
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
  },
  "&.Mui-disabled": {
    color: alpha(theme.palette.primary.contrastText, 0.3),
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
    // border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  },
}));

const RsvpButton = ({ variant, ...props }: Omit<ButtonProps, "sx">) => (
  <Link href="/rsvp">
    <StyledButton disabled variant={variant || "outlined"} {...props}>
      Check back later to RSVP
    </StyledButton>
  </Link>
);

export default RsvpButton;
