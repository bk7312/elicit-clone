import { Box, Heading, Text } from "@chakra-ui/react";

export default function Starred() {
  // read data and render starred using map

  return (
    <>
      <Box maxWidth="600px" margin="auto">
        <Heading marginTop="1em">Starred items</Heading>
        <Text marginTop="2em">You have no starred items</Text>
      </Box>
    </>
  );
}
