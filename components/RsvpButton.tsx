import Link from "next/link";
import { ButtonProps } from "@mui/material/Button";

import StyledButton from "./StyledButton";

const RsvpButton = ({ variant, ...props }: Omit<ButtonProps, "sx">) => (
  <Link href="/rsvp">
    <StyledButton variant={variant || "outlined"} {...props}>
      RSVP
    </StyledButton>
  </Link>
);

export default RsvpButton;
