import { Box, Heading, Text, ListItem, UnorderedList } from "@chakra-ui/react";
export default function Faq() {
  return (
    <Box maxWidth="600px" margin="auto">
      <Heading marginTop="1em">Frequently Asked Questions</Heading>
      <Text marginTop="2em">Last updated: April 2022</Text>
      <UnorderedList marginTop="1em" paddingX="1em">
        <ListItem>What is Elicit?</ListItem>
        <ListItem>How do people use Elicit</ListItem>
        <ListItem>How is Elicit different from other research tools?</ListItem>
      </UnorderedList>
      <Text marginTop="1em">[...]</Text>
    </Box>
  );
}
