import { Box, Flex, Heading, Text, Input, Button } from "@chakra-ui/react";

export default function Tasks() {
  // search bar, create button
  // data in array => map

  return (
    <>
      <Box maxWidth="600px" margin="auto">
        <Heading marginTop="1em">Tasks</Heading>
        <Flex>
          <Input></Input>
          <Button>Create</Button>
        </Flex>

        <Text marginTop="1em">Elicit recommended</Text>

        <Text marginTop="1em">Created by me</Text>

        <Text marginTop="1em">Created by others</Text>
      </Box>
    </>
  );
}
