import { FiUploadCloud } from "react-icons/fi";

import SearchBar from "../components/SearchBar";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function HomeSearch() {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  return (
    <Flex
      maxWidth="3xl"
      margin="auto"
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="85dvh"
    >
      <Heading as="h3" fontWeight="normal">
        Ask a research question
      </Heading>
      <Text marginTop="0.5em" fontWeight="light">
        Elicit will find answers from 175 million papers
      </Text>

      <SearchBar />

      <Text marginTop="2em">Or run Elicit over your own papers</Text>
      <Button
        marginTop="1em"
        variant="outline"
        color="gray.500"
        leftIcon={<FiUploadCloud />}
        onClick={onModalOpen}
      >
        Upload PDFs
      </Button>

      <Modal isOpen={isModalOpen} onClose={onModalClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload papers</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingTop="0">
            <Text color="gray.700" fontSize="sm">
              You can run Elicit over your own collection of papers to
              automatically extract key information, analyze claims, and find
              similar papers.
            </Text>
            <Flex
              border="1px dashed"
              color="messenger.500"
              borderRadius="5px"
              direction="column"
              marginTop="1em"
              justifyContent="center"
              alignItems="center"
              padding="2em"
              gap="0.5em"
            >
              <Box
                backgroundColor="blue.50"
                padding="0.5em"
                fontSize="4xl"
                borderRadius="50%"
              >
                <FiUploadCloud />
              </Box>
              <Text fontWeight="bold" fontSize="sm">
                Drag and drop PDFs here
              </Text>
            </Flex>

            {/* <Input type='file'></Input> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onModalClose}>
              Analyze papers
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
