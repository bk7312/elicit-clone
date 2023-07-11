import {
  Flex,
  Text,
  Switch,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { HiChevronDown } from "react-icons/hi";
import { PiFunnel, PiArrowsDownUp } from "react-icons/pi";

export default function ResultsHeader() {
  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      gap="0.5em"
      paddingBottom="1em"
      paddingX="1em"
      color="gray.600"
      fontSize="sm"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
    >
      <Text fontWeight="500">Has PDF</Text>
      <Switch marginRight="1em" />
      <Button
        variant="outline"
        color="gray.600"
        fontWeight="500"
        fontSize="sm"
        rightIcon={<PiFunnel />}
      >
        Filter
      </Button>
      <Menu>
        <MenuButton
          as={Button}
          variant="outline"
          color="gray.600"
          fontWeight="500"
          fontSize="sm"
          rightIcon={<PiArrowsDownUp />}
        >
          Sort by
        </MenuButton>
        <MenuList>
          <MenuItem>Paper title</MenuItem>
          <MenuItem>Abstract</MenuItem>
          <MenuItem>PDF</MenuItem>
          <MenuItem>Year</MenuItem>
          <MenuItem>Citations</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          variant="outline"
          color="gray.600"
          fontWeight="500"
          fontSize="sm"
          rightIcon={<HiChevronDown />}
        >
          Export as
        </MenuButton>
        <MenuList>
          <MenuItem>BIB</MenuItem>
          <MenuItem>CSV</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
