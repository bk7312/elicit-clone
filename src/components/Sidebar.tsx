
import { 
  Box,
  Flex,
  Heading, 
  VStack,
  Text, 
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  ButtonGroup,
  Tooltip,
  IconButton,
} from '@chakra-ui/react'

import { FiSearch } from 'react-icons/fi'
import { 
  PiThumbsUpLight, 
  PiThumbsDownLight, 
  PiCheckLight,
  PiArrowLineLeft,
  PiArrowLineRight,
} from 'react-icons/pi'

import { useState, MouseEvent } from 'react'

interface SidebarProps {
  searchInput: string
}

export default function Sidebar({ searchInput }: SidebarProps) {

  const [hideSidebar, setHideSidebar] = useState(false)

  const [infoType, setInfoType] = useState([
    {text: 'Abstract summary', isChecked: false},
    {text: 'Intervention', isChecked: false},
    {text: 'Outcomes measured', isChecked: false},
    {text: 'Number of participants', isChecked: false},
  ])

  const infoButtons = infoType.map(info => (
    <Button
      width='calc(100% - 1em)'
      key={info.text}
      id={info.text}
      fontSize='sm'
      paddingY='0.5em'
      paddingX='1em'
      marginY='3px'
      fontWeight='normal'
      onClick={toggleInfoButton}
      backgroundColor={info.isChecked ? 'messenger.50' : ''}
      _hover={{backgroundColor: `${info.isChecked ? 'messenger.50' : 'gray.100'}`}}
      justifyContent={info.isChecked ? 'space-between' : 'flex-start'}
      rightIcon={info.isChecked ? <PiCheckLight/> : <></>}
    >{info.text}</Button>
  ))

  function toggleInfoButton(e: MouseEvent<HTMLButtonElement> ) {
    const id = e.currentTarget.id
    setInfoType(prev => prev.map(el => el.text === id ? {...el, isChecked: !el.isChecked} : el))
  }


  // dynamic height for summary and infoButton section to fit page height
  // add paper info popover with additional data, when selected, adds/push to infoButton
  // move infoButton logic to /search instead and pass props to Sidebar
  // add hide/show functionality

  // Minor UI bug with summary thumbs up/down button, if hovered then scroll, tooltip scrolls instead of hide

  return (
    <Flex direction='column' maxWidth='330px' gap='1em' padding='1em'>
      <Box backgroundColor='white' borderRadius='10px' boxShadow='sm' padding='1em'>
        <Flex justifyContent='space-between' alignItems='center' paddingBottom='0.75em'>
          <Heading fontSize='md'>{searchInput}</Heading>
          <IconButton 
            aria-label='Hide sidebar' 
            variant='ghost'
            onClick={() => setHideSidebar(!hideSidebar)}
            icon={hideSidebar ? <PiArrowLineRight/> : <PiArrowLineLeft/>}
          />
        </Flex>
        <Box overflow='auto' maxHeight='350px'>
          <Text marginTop='0' textTransform='uppercase' fontSize='xs'>Summary of top papers</Text>
          <Text marginTop='0.5em' fontSize='sm'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In molestias alias commodi accusantium totam odio, ab, distinctio ipsum, possimus fugit odit corrupti quidem. Animi tempora quis dicta reiciendis a consectetur illum, dolorem accusantium neque rem iusto libero suscipit, beatae, excepturi provident laborum similique. Nemo tempora assumenda minima laborum numquam consequuntur animi sunt molestias repudiandae natus! Mollitia, sunt. Vero error consequuntur sequi consectetur illum quidem excepturi fugit architecto enim eveniet quia, aliquid minima laudantium fugiat porro quod eaque eligendi perferendis molestias natus. Aliquam rem illo dicta repellat amet iure suscipit laudantium a assumenda corporis? Dolores nesciunt ipsum architecto quisquam ut similique.
          </Text>
          <ButtonGroup variant='outline' marginTop='1em'>
            <Tooltip label='This summary is good'>
              <IconButton 
                aria-label='This summary is good' 
                icon={<PiThumbsUpLight/>}
              />
            </Tooltip>
            <Tooltip label='This summary is not good'>
              <IconButton 
                aria-label='This summary is not good' 
                icon={<PiThumbsDownLight/>}
              />
            </Tooltip>
          </ButtonGroup>
        </Box>
      </Box>
      <Box backgroundColor='white' borderRadius='10px' boxShadow='sm'>
        <Heading fontSize='md' paddingX='1em' paddingTop='1em'>Add information about all papers</Heading>
        <ButtonGroup variant='ghost' width='100%' padding='0.5em' >
          <VStack spacing='0' width='100%' overflow='auto' maxHeight='120px'>         
            {infoButtons}
          </VStack>
        </ButtonGroup>
        <Heading fontSize='sm' paddingX='1em' paddingY='0.5em'>Search for paper information</Heading>
        <InputGroup margin='0.5em' maxWidth='calc(100% - 1em)'>
        <InputLeftElement 
          pointerEvents='none' 
          fontSize='1.4rem'
          width='12' 
          color='gray.500' 
        >
          <FiSearch/>
        </InputLeftElement>
        <Input
          placeholder='What was the...'
        />
        </InputGroup>
      </Box>
    </Flex>
  )
}

