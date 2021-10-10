import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  question: string;
  answer: string;
  extraDetails?: React.ReactNode;
}

export default function QuestionAnswer({
  question,
  answer,
  extraDetails,
}: Props) {
  return (
    <Box>
      <Typography variant="h6">{question}</Typography>
      <Typography variant="body2">{answer}</Typography>
      {extraDetails}
    </Box>
  );
}
