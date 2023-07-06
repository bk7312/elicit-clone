
import { FiUploadCloud, FiSearch } from 'react-icons/fi'
import { PiSparkleFill } from 'react-icons/pi'
import { useState, ChangeEvent, KeyboardEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverAnchor,
  // PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

interface IBrainstorm {
  isLoading: boolean
  results: string[]
}

export default function SearchBar() {

  const [input, setInput] = useState('')

  const [brainstorm, setBrainstorm] = useState<IBrainstorm>({
    isLoading: false,
    results: [],
  })

  const { isOpen: isPopoverOpen, onOpen: onPopoverOpen, onClose: onPopoverClose } = useDisclosure()
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()
  const navigate = useNavigate()

  const suggestedSearchText = [
    'What is the impact of stress and anxiety on nightmares?',
    'What are the benefits of polyphasic sleep?',
    'How does human mortality affect morality?',
  ]

  const recentSearchText = [
    'What is the impact of stress and anxiety on daydreams?',
    'What are the risks of monophasic sleep?',
    'How does human morality affect mortality?',
  ]

  const textToButton = (text: string) => (
    <Link to={`/search?q=${text}`}>
      <Button
        key={text}
        variant='ghost'
        color='gray.500'
        width="100%"
        justifyContent="flex-start"
        leftIcon={<FiSearch />}
      >{text}</Button>
    </Link>
  )

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value
    setInput(value)
  }

  function handleEnter(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter' && input !== '') {
      navigate(`/search?q=${input}`)
    }
  }

  function handleBrainstorm() {
    console.log(`Brainstorming ${input}...`)
    setBrainstorm(prev => ({...prev, isLoading: true}))
    setTimeout(() => setBrainstorm(prev => ({
      ...prev,
      results: [
        `What factors contribute to ${input}?`,
        `How does ${input} work on a small scale?`,
        `What is the impact of ${input} on a global scale?`,
        `What are the risks of ${input}?`,
        `How has ${input} changed over time?`,
      ],
      isLoading: false
    })), 3000)
  }

  // consider moving into separate component
  // search bar input also needed in /search header
  const inputSection = (
    <InputGroup marginTop='2em' maxWidth='85%'>
      <InputLeftElement
        pointerEvents='none'
        fontSize='1.4rem'
        width='14'
        color='gray.500'
        marginTop='1'
      >
        <FiSearch />
      </InputLeftElement>

      <Input
        boxShadow='md'
        type='text'
        placeholder=''
        size='lg'
        focusBorderColor='none'
        paddingLeft='3rem'
        value={input}
        onChange={handleChange}
        onKeyDown={handleEnter}
        onFocus={onPopoverOpen}
        onBlur={onPopoverClose}
      />
      {input !== '' && <InputRightElement
        width='fit-content'
        marginX='2'
        marginY='1'
      >
        <Link to={`/search?q=${input}`}>
          <Button
            backgroundColor='messenger.600'
            color='white'
            size='sm'
            _hover={{ bg: 'messenger.700' }}
            isLoading={brainstorm.isLoading}
          >
            Search
          </Button>
        </Link>
      </InputRightElement>}
    </InputGroup>
  )

  // search param => /search?q=insert+search+term+here&token=TOKEN_ID
  // clicking the dropdown menu and/or buttons should NOT close the dropdown
  
  // PASS - clicking input field opens open popover (Input onFocus={onOpen})
  // PASS - opening popover doesn't steal focus from input (Popover autoFocus={false})
  // PASS - popover stays open while typing (Popover isOpen={isOpen} keeps it open)
  // FAIL - clicking popover (losing input focus) doesn't close popover 
  //        (failed due to Input onBlur={onClose}, unable to close popover if onBlur removed)
  // FAIL - clicking outside input or popover or pressing esc closes popover 
  //        (Popover closeOnBlur and closeOnEsc doesn't work, even with Input onBlur removed)
  // FAIL - clicking the brainstorm question button should not close the popover
  // PASS - after clicking brainstorm button, replace brainstorm button and submit button with loader
  // PASS - then replaces entire dropdown with "suggested research questions" followed by 5 suggestions

  return (
    <Flex
      maxWidth='3xl'
      margin='auto'
      direction='column'
      alignItems='center'
      justifyContent='center'
      height='85dvh'
    >
      <Heading as='h3' fontWeight='normal'>Ask a research question</Heading>
      <Text marginTop='0.5em' fontWeight='light'>Elicit will find answers from 175 million papers</Text>

      <Popover
        isOpen={isPopoverOpen}
        onClose={onPopoverClose}
        autoFocus={false}
        closeOnBlur={true} // no effect?
        closeOnEsc={true} // no effect?
      >
      
        <PopoverAnchor>
          {inputSection}
        </PopoverAnchor>

        {/* <PopoverTrigger>
          <Button display='none'>Trigger</Button>
        </PopoverTrigger> */}

        <PopoverContent 
          width='85vw' 
          maxWidth='653px'
          borderRadius='5px'
          boxShadow='md' 
          marginTop='-2'
        >
          <PopoverBody>
            {input !== '' && <Button
              variant='outline'
              colorScheme='messenger'
              width='100%'
              fontSize='0.9rem'
              size='md'
              marginY='2'
              _hover={{ bg: 'messenger.100' }}
              leftIcon={!brainstorm.isLoading ? <PiSparkleFill /> : <></>}
              onClick={handleBrainstorm}
            >
              {brainstorm.isLoading ? 
                `Brainstorming research questions...` : 
                `Brainstorm questions for '${input}'`}
            </Button>}
            {
              brainstorm.results.length === 0 ?
                <>
                  <Text>Try searching for</Text>
                  {suggestedSearchText.map(text => textToButton(text))}
                  <Text>Recent searches</Text>
                  {recentSearchText.map(text => textToButton(text))}
                </> : 
                <>
                  <Text>Suggested research questions</Text>
                  {brainstorm.results.map(text => textToButton(text))}
                </>
            }
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Text marginTop='2em'>Or run Elicit over your own papers</Text>
      <Button
        marginTop='1em'
        variant='outline'
        color='gray.500'
        leftIcon={<FiUploadCloud />}
        onClick={onModalOpen}
      >Upload PDFs</Button>

      <Modal isOpen={isModalOpen} onClose={onModalClose} isCentered>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader >Upload papers</ModalHeader>
          <ModalCloseButton/>
          <ModalBody paddingTop='0'>
            <Text color='gray.700' fontSize='sm'  >You can run Elicit over your own collection of papers to automatically extract key information, analyze claims, and find similar papers.</Text>
            <Flex 
              border='1px dashed' 
              color='messenger.500'
              borderRadius='5px' 
              direction='column' 
              marginTop='1em' 
              justifyContent='center' 
              alignItems='center'
              padding='2em'
              gap='0.5em'
            >
              <Box backgroundColor='blue.50' padding='0.5em' fontSize='4xl' borderRadius='50%'><FiUploadCloud/></Box>
              <Text fontWeight='bold' fontSize='sm'>Drag and drop PDFs here</Text>
            </Flex>

            {/* <Input type='file'></Input> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={onModalClose}>
              Analyze papers
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Flex>
  )
}
