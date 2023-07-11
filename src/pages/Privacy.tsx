import { Box, Heading, Text } from "@chakra-ui/react";

export default function Privacy() {
  return (
    <Box maxWidth="600px" margin="auto">
      <Heading marginTop="1em">Privacy Policy</Heading>
      <Text marginTop="2em">Last updated: February 10, 2021</Text>
      <Heading as="h3" fontSize="2xl" marginTop="1em">
        Introduction
      </Heading>
      <Text marginTop="1em">
        Thank you for choosing to be part of our community at Ought Inc.
        (“company”, “we”, “us”, or “our”). We are committed to protecting your
        personal information and your right to privacy. If you have any
        questions or concerns about our policy, or our practices with regards to
        your personal information, please contact us at operations@ought.org.
      </Text>
      <Text marginTop="1em">[...]</Text>
    </Box>
  );
}
