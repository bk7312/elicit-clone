
import { FiUploadCloud, FiSearch } from 'react-icons/fi'
import { PiSparkleFill } from 'react-icons/pi'
import { useState, ChangeEvent } from 'react'

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
  PopoverBody,
} from '@chakra-ui/react'

export default function SearchBar() {

  const [input, setInput] = useState('')
  const [inputFocus, setInputFocus] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setInput(value)
  }

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
      <InputGroup marginTop='2em' maxWidth='85%'>
        <InputLeftElement 
          pointerEvents='none' 
          fontSize='1.4rem'
          width='14' 
          color='gray.500' 
          marginTop='1'
        >
          <FiSearch/>
        </InputLeftElement>
        
        <Popover>
          <Input 
            boxShadow='md' 
            type='text' 
            placeholder='' 
            size='lg'
            focusBorderColor='none'
            paddingLeft='3rem'
            value={input}
            onChange={handleChange}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
          <Box 
            backgroundColor='white'
            position='fixed' 
            marginTop='3em'
            width='85%'
            maxWidth='653px'
            display={inputFocus ? '' : 'none' }
            zIndex='100'
            borderRadius='5px'
            boxShadow='md' 
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
                  leftIcon={<PiSparkleFill/>}
              >Brainstorm questions for '{input}'</Button>}
              <Text>Try searching for</Text>
              <Button 
                variant='ghost'
                color='gray.500' 
                width="100%" 
                justifyContent="flex-start" 
                leftIcon={<FiSearch/>}
              >How does stress and anxiety impact dreams?</Button>
              <Button 
                variant='ghost'
                color='gray.500' 
                width="100%" 
                justifyContent="flex-start" 
                leftIcon={<FiSearch/>}
              >What is the effectiveness on sleeping faster to save time?</Button>
              <Button 
                variant='ghost'
                color='gray.500' 
                width="100%" 
                justifyContent="flex-start" 
                leftIcon={<FiSearch/>}
              >What are the effects of time on mortality?</Button>
              <Text>Recent searches</Text>
              <Button 
                variant='ghost'
                color='gray.500' 
                width="100%" 
                justifyContent="flex-start" 
                leftIcon={<FiSearch/>}
              >How does stress and anxiety impact daydreams?</Button>
              <Button 
                variant='ghost'
                color='gray.500' 
                width="100%" 
                justifyContent="flex-start" 
                leftIcon={<FiSearch/>}
              >What is the effectiveness on sleep fasting to detox time?</Button>
              <Button 
                variant='ghost'
                color='gray.500' 
                width="100%" 
                justifyContent="flex-start" 
                leftIcon={<FiSearch/>}
              >What are the effects of mortality on time?</Button>
            </PopoverBody>
          </Box>
        </Popover>

        {input !== '' && <InputRightElement 
          width='fit-content'
          marginX='2'
          marginY='1'
        >
          <Button 
            backgroundColor='messenger.600' 
            color='white' 
            size='sm' 
            _hover={{ bg: 'messenger.700' }}
          >Submit</Button>
        </InputRightElement>}
      </InputGroup>

      <Text marginTop='2em'>Or run Elicit over your own papers</Text>
      <Button 
        marginTop='1em' 
        variant='outline' 
        color='gray.500' 
        leftIcon={<FiUploadCloud/>}
        zIndex={inputFocus ? '-1' : '0'}
      >Upload PDFs</Button>
    </Flex>
  )
}
