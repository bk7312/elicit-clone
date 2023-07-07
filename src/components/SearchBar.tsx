
import { FiSearch } from 'react-icons/fi'
import { PiSparkleFill } from 'react-icons/pi'
import { 
  useState, 
  ChangeEvent, 
  KeyboardEvent, 
  // useRef 
} from 'react'
import { useNavigate, Link } from 'react-router-dom'

import SuggestionButton from './SuggestionButton'
import { suggestedSearchText, recentSearchText, generateBrainstormData} from '../data/data'

import {
  // Box,
  // Flex,
  // Heading,
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

} from '@chakra-ui/react'

interface IBrainstorm {
  isLoading: boolean
  results: string[]
}

// search param => /search?q=insert+search+term+here&token=TOKEN_ID

export default function SearchBar() {

  const [input, setInput] = useState('')
  // const inputRef = useRef<HTMLInputElement>(null)

  const [brainstorm, setBrainstorm] = useState<IBrainstorm>({
    isLoading: false,
    results: [],
  })

  const { isOpen: isPopoverOpen, onOpen: onPopoverOpen, onClose: onPopoverClose } = useDisclosure()
  const navigate = useNavigate()

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value
    setInput(value)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter' && input !== '') {
      navigate(`/search?q=${input}`)
    }
    if (e.key === 'Escape') {
      e.currentTarget.blur()
      onPopoverClose()
    }
  }

  function handleBrainstorm() {
    console.log(`Brainstorming ${input}...`)
    setBrainstorm(prev => ({...prev, isLoading: true}))
    setTimeout(() => setBrainstorm(prev => ({
      ...prev,
      results: generateBrainstormData(input),
      isLoading: false
    })), 3000)
  }

  return (
    <>
      <Popover
        isOpen={isPopoverOpen}
        onClose={onPopoverClose}
        autoFocus={false}
        // initialFocusRef={inputRef}
      >
      
        <PopoverAnchor>
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
              // ref={inputRef}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={onPopoverOpen}
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
                  {suggestedSearchText.map((text, index) => <SuggestionButton key={index}>{text}</SuggestionButton>)}
                  <Text>Recent searches</Text>
                  {recentSearchText.map((text, index) => <SuggestionButton key={index}>{text}</SuggestionButton>)}
                </> : 
                <>
                  <Text>Suggested research questions</Text>
                  {brainstorm.results.map((text, index) => <SuggestionButton key={index}>{text}</SuggestionButton>)}
                </>
            }
          </PopoverBody>
        </PopoverContent>
      </Popover>

    </>
  )
}
