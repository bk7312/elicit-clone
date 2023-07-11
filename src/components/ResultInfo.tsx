import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Tooltip,
  // Alert,
  // AlertIcon,
  // AlertTitle,
  // AlertDescription,
} from "@chakra-ui/react";

import { GoBook, GoPeople, GoLink } from "react-icons/go";
import { MouseEvent } from "react";

interface InfoProps {
  title: string;
  titleFontSize: string;
  author: string[];
  journal: string;
  year: number;
  citations: number;
  doi: string;
}

export default function ResultInfo({
  title,
  author,
  journal,
  year,
  citations,
  doi,
  titleFontSize,
}: InfoProps) {
  // todo - improve doi copied alert popup, use chakra ui alert
  // handle other data or no data, i.e. pdf, no doi, etc

  async function copyDoi(e: MouseEvent<HTMLButtonElement>, doi: string) {
    e.stopPropagation();
    await navigator.clipboard.writeText(doi);
    alert("DOI copied!");
  }

  return (
    <Box>
      <Heading fontSize={titleFontSize} whiteSpace="pre-wrap">
        {title}
      </Heading>
      <Flex
        gap="1em"
        alignItems="center"
        color="gray.500"
        fontSize="sm"
        marginTop="1em"
      >
        <GoPeople />
        <Text whiteSpace="pre-wrap">{author.join(", ")}</Text>
      </Flex>
      <Flex
        gap="1em"
        alignItems="center"
        color="gray.500"
        fontSize="sm"
        marginTop="0.25em"
      >
        <GoBook />
        <Text>{journal}</Text>
      </Flex>
      <Flex
        alignItems="center"
        color="gray.500"
        fontSize="sm"
        marginTop="1em"
        gap="0.5em"
      >
        <Text>{year}</Text>
        <Text>{citations > 0 ? `${citations} citations` : " "}</Text>
        <Tooltip label="Copy DOI">
          <Button
            size="xs"
            fontSize="xs"
            color="gray.600"
            rightIcon={<GoLink />}
            onClick={(e) => copyDoi(e, doi)}
          >
            DOI
          </Button>
        </Tooltip>
      </Flex>
    </Box>
  );
}
