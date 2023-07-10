
import { FiSearch } from 'react-icons/fi'
import { PiSparkleFill } from 'react-icons/pi'
import { 
  useState, 
  ChangeEvent, 
  KeyboardEvent, 
  FormEvent,
  useRef,
  useEffect,
} from 'react'
import { useNavigate } from 'react-router-dom'

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
  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLInputElement>(null)

  const [brainstorm, setBrainstorm] = useState<IBrainstorm>({
    isLoading: false,
    results: [],
  })

  const { isOpen: isPopoverOpen, onOpen: onPopoverOpen, onClose: onPopoverClose } = useDisclosure()
  const navigate = useNavigate()

  useEffect(() => {
    function closePopoverOnOutsideClick(e: MouseEvent) {
      if (!isPopoverOpen) return
      if (e.target !== inputRef.current && !popoverRef.current?.contains(e.target as Node)) {
        onPopoverClose()
      }
      if (popoverRef.current?.contains(e.target as Node)) inputRef.current?.focus()
    }
    document.addEventListener('click', closePopoverOnOutsideClick)
    return () => document.removeEventListener('click', closePopoverOnOutsideClick)
  }, [isPopoverOpen, onPopoverClose])

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value
    setInput(value)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    // if (e.key === 'Enter' && input !== '') {
    //   navigate(`/search?q=${input}`)
    // }
    if (e.key === 'Escape') {
      e.currentTarget.blur()
      onPopoverClose()
    }
  }

  function handleSubmit(e: FormEvent<HTMLDivElement>): void {
    e.preventDefault()
    if (input !== '') navigate(`/search?q=${input}`)
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
        // onClose={onPopoverClose}
        autoFocus={false}
        // initialFocusRef={inputRef}
      >
      
        <PopoverAnchor>

          <InputGroup as='form' marginTop='2em' maxWidth='85%' onSubmit={handleSubmit}>
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
              ref={inputRef}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={onPopoverOpen}
            />
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
                isLoading={brainstorm.isLoading}
                type='submit'
                // onClick={() => navigate(`/search?q=${input}`)}
              >
                Search
              </Button>
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
          ref={popoverRef}
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
                  <Text userSelect='none'>Try searching for</Text>
                  {suggestedSearchText.map((text, index) => <SuggestionButton key={index}>{text}</SuggestionButton>)}
                  <Text userSelect='none'>Recent searches</Text>
                  {recentSearchText.map((text, index) => <SuggestionButton key={index}>{text}</SuggestionButton>)}
                </> : 
                <>
                  <Text userSelect='none'>Suggested research questions</Text>
                  {brainstorm.results.map((text, index) => <SuggestionButton key={index}>{text}</SuggestionButton>)}
                </>
            }
          </PopoverBody>
        </PopoverContent>
      </Popover>

    </>
  )
}
