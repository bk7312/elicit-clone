import { Link } from "react-router-dom";
import { Heading, Flex, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Flex
      height="85vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading fontSize="2xl">404 | This page could not be found.</Heading>
      <Text marginTop="1em">
        <Link to="/">Go back to home</Link>
      </Text>
    </Flex>
  );
}
