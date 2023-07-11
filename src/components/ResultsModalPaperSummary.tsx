import {
  Box,
  Text,
} from "@chakra-ui/react";

interface SummaryProps {
  heading: string;
  text: string;
  key: number;
}

export default function ResultsModalPaperSummary({
  heading,
  text,
}: SummaryProps) {
  return (
    <Box
      padding="1em 0.5em"
      _hover={{ backgroundColor: "gray.50" }}
      borderRadius="10px"
      cursor="pointer"
    >
      <Text fontWeight="bold">{heading}</Text>
      <Text marginTop="1em">{text}</Text>
    </Box>
  );
}
