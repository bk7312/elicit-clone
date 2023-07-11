import {
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { PiStar, PiStarFill, PiArrowLineRight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

import { useState, MouseEvent } from "react";
import ResultInfo from "./ResultInfo";
import ResultsHeader from "./ResultsHeader";
import ResultsModalPaperSummary from "./ResultsModalPaperSummary";
import ResultsModalPaperText from "./ResultsModalPaperText";
import {
  sectionHeadings,
  generateResultsData,
  generatePaperSummary,
  generatePaperText,
} from "../data/data";

interface ResultsProps {
  searchInput: string;
  toggleSidebar: {
    hideSidebar: boolean;
    setHideSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export default function Results({ searchInput, toggleSidebar }: ResultsProps) {
  // todo
  // move logic to /search and pass to Results as props
  // filtering logic, how to make table scrollable (abstract summary and additional cols)
  // while keeping paper title fixed in place
  // starred to be saved to localStorage and viewable from Starred
  // delete icon to appear on hover?

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const { hideSidebar, setHideSidebar } = toggleSidebar;

  const [resultsData, setResultsData] = useState(() =>
    generateResultsData(searchInput)
  );

  const [modalData, setModalData] = useState({
    id: "",
    title: "",
    author: [""],
    journal: "",
    isStarred: false,
    year: 0,
    citations: 0,
    doi: "",
    abstract: "",
  });

  function toggleStarred(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const id = e.currentTarget.id;
    setResultsData((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, isStarred: !el.isStarred } : el
      )
    );
  }

  function openModal(id: string) {
    const paper = resultsData.filter((result) => result.id === id);
    setModalData(paper[0]);
    onModalOpen();
  }

  return (
    <Box
      backgroundColor="white"
      paddingY="1em"
      marginY="1em"
      marginLeft={hideSidebar ? "1em" : ""}
      marginRight="1em"
      borderRadius="10px"
      width="100%"
      maxWidth="full"
      boxShadow="sm"
    >
      <Flex justifyContent="space-between">
        <IconButton
          aria-label="Show sidebar"
          variant="ghost"
          marginX="1em"
          onClick={() => setHideSidebar(false)}
          visibility={hideSidebar ? "visible" : "hidden"}
          icon={<PiArrowLineRight />}
        />
        <ResultsHeader />
      </Flex>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              {sectionHeadings.map((heading) => (
                <Th key={heading}>{heading}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {resultsData.map((result) => (
              <Tr
                key={result.id}
                cursor="pointer"
                onClick={() => openModal(result.id)}
                _hover={{ backgroundColor: "gray.50" }}
              >
                <Td width="20px" paddingLeft="1.3rem" paddingRight="0">
                  <IconButton
                    variant="ghost"
                    aria-label="star"
                    color="gray.500"
                    fontSize="2xl"
                    id={result.id}
                    onClick={toggleStarred}
                    icon={result.isStarred ? <PiStarFill /> : <PiStar />}
                  />
                </Td>
                <Td maxWidth="200px">
                  <ResultInfo {...result} titleFontSize="md" />
                </Td>
                <Td maxWidth="300px" whiteSpace="pre-wrap">
                  {result.abstract}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex justifyContent="center" marginTop="1em">
          <Button variant="outline">Show more</Button>
        </Flex>
      </TableContainer>

      <Modal isOpen={isModalOpen} onClose={onModalClose} isCentered size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody padding="0">
            <Flex
              color="gray.600"
              borderRadius="5px"
              justifyContent="center"
              alignItems="center"
            >
              <Box width="50%" maxHeight="90vh" overflowY="auto">
                <Box padding="2em">
                  <ResultInfo {...modalData} titleFontSize="4xl" />
                  <br />
                  <Box
                    paddingY="1em"
                    borderTop="1px solid"
                    borderTopColor="gray.200"
                  >
                    {generatePaperSummary().map((data, index) => (
                      <ResultsModalPaperSummary key={index} {...data} />
                    ))}
                  </Box>
                </Box>
                <Box
                  position="sticky"
                  background="white"
                  bottom="0"
                  width="full"
                  padding="0.5em"
                  borderTop="1px solid"
                  borderTopColor="gray.200"
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      fontSize="1.4rem"
                      width="14"
                      color="gray.500"
                      marginTop="1"
                    >
                      <FiSearch />
                    </InputLeftElement>
                    <Input
                      type="text"
                      placeholder="Ask a question about this paper"
                      size="lg"
                      focusBorderColor="none"
                      paddingLeft="3rem"
                    />
                    <InputRightElement
                      width="fit-content"
                      marginX="2"
                      marginY="1"
                    >
                      <Button
                        backgroundColor="messenger.600"
                        color="white"
                        size="sm"
                        _hover={{ bg: "messenger.700" }}
                      >
                        Ask
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Box>
              <Box
                width="50%"
                padding="2em"
                overflowY="auto"
                maxHeight="90vh"
                backgroundColor="gray.50"
                color="gray.600"
              >
                {generatePaperText().map((data, index) => (
                  <ResultsModalPaperText key={index} {...data} />
                ))}
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
