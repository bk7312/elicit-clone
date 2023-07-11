import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

interface TextProps {
  heading: string;
  paragraphs: string[];
  key: number;
}

export default function ResultsModalPaperText({
  heading,
  paragraphs,
}: TextProps) {
  return (
    <Box padding="1em 0.5em">
      <Heading fontSize="2xl">{heading}</Heading>
      {paragraphs.map((text, index) => (
        <Text key={index} marginTop="1em">
          {text}
        </Text>
      ))}
    </Box>
  );
}
