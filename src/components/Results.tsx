
import { 
  Box,
  Flex,
  Text, 
  Switch,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import { HiChevronDown } from 'react-icons/hi'
import { PiFunnel, PiArrowsDownUp, PiStar, PiStarFill } from 'react-icons/pi'

import { useState, MouseEvent } from 'react'
import ResultCard from './ResultCard'

export default function Results() {

  // todo 
  // move logic to /search and pass to Results as props
  // filtering logic, how to make table scrollable (abstract summary and additional cols)
  // while keeping paper title fixed in place
  // starred to be saved to localStorage and viewable from Starred
  // delete icon to appear on hover?

  const sectionHeadings = ['', 'Paper title', 'Abstract summary']

  const [resultsData, setResultsData] = useState([{
    id: '1',
    title: 'Lorem ipsum dolor, sit amet consectetur',
    author: ['Author', 'Writer', 'Editor'],
    journal: 'Journal',
    isStarred: true,
    year: 2030,
    citations: 10,
    doi: 'https://doi.org/',
    abstract: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem rem assumenda unde obcaecati asperiores nemo doloribus eaque ipsum repudiandae necessitatibus odit accusamus iusto, dolore et corrupti distinctio! Sed doloribus quam est quis mollitia aliquam ad deserunt quibusdam quo, ipsam eum fugiat quidem fugit molestias adipisci dicta. Consequatur esse accusamus odit nobis ut quam eos sunt labore, distinctio sint asperiores, omnis quisquam nisi illum blanditiis nostrum accusantium. Sint delectus, fuga nisi quaerat explicabo facere velit minima assumenda, amet mollitia sunt. Cumque blanditiis doloribus expedita? Sunt corrupti molestiae perferendis natus quia ullam enim temporibus qui. Reprehenderit nam dolores iure quia, quos blanditiis.',
  }, {
    id: '2',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda',
    author: ['AuthorA', 'WriterB', 'EditorC'],
    journal: 'Journal1',
    isStarred: false,
    year: 1999,
    citations: 100,
    doi: 'https://doi.org/',
    abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda voluptatem sunt repellendus sed natus debitis cum vero ratione error corrupti quo pariatur, voluptas veniam quidem itaque nulla ut illum officia voluptate id. Aliquam, eligendi sed? Obcaecati non deserunt quae eligendi alias dicta quaerat, assumenda dignissimos sequi fuga quisquam reprehenderit?',
  }, {
    id: '3',
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: ['Author12', 'Writer12', 'Editor12'],
    journal: 'Journal12',
    isStarred: false,
    year: 123,
    citations: 123,
    doi: 'https://doi.org/',
    abstract: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim labore voluptatem quia eligendi minima rem illum nesciunt doloremque iure cupiditate atque autem eos iste doloribus veniam sapiente magni, placeat nihil obcaecati. Architecto, ullam. Ea asperiores consequuntur dolorum doloribus? Reprehenderit dolore non vel unde optio repudiandae numquam perferendis amet modi harum deserunt obcaecati sint debitis vero, accusantium suscipit. Iure nulla quibusdam ullam explicabo voluptates, excepturi fugiat natus, rem inventore eum voluptate error repellendus veritatis, adipisci eos! Totam impedit voluptatibus reiciendis nostrum?',
  }])

  function toggleStarred(e: MouseEvent<HTMLButtonElement> ) {
    const id = e.currentTarget.id
    setResultsData(prev => prev.map(el => el.id === id ? {...el, isStarred: !el.isStarred} : el))
  } 

  return (
    <Box 
      backgroundColor='white' 
      padding='1em' 
      marginY='1em' 
      marginRight='1em'
      borderRadius='10px' 
      width='100%' 
      maxWidth='full' 
      boxShadow='sm'
    >
      <Flex justifyContent='flex-end' alignItems='center' gap='0.5em' color='gray.600' fontSize='sm'>
        <Text fontWeight='500'>Has PDF</Text>
        <Switch marginRight='1em'/>
        <Button 
          variant='outline'
          color='gray.600'
          fontWeight='500'
          fontSize='sm'
          rightIcon={<PiFunnel/>}
        >Filter</Button>
        <Menu>
          <MenuButton 
            as={Button} 
            variant='outline' 
            color='gray.600' 
            fontWeight='500' 
            fontSize='sm'
            rightIcon={<PiArrowsDownUp/>} 
          >Sort by</MenuButton> 
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
            variant='outline' 
            color='gray.600' 
            fontWeight='500' 
            fontSize='sm'
            rightIcon={<HiChevronDown/>} 
          >Export as</MenuButton> 
          <MenuList>
            <MenuItem>BIB</MenuItem>
            <MenuItem>CSV</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
            {sectionHeadings.map(heading => (<Th key={heading}>{heading}</Th>))}
            </Tr>
          </Thead>
          <Tbody>
            {resultsData.map(result => (
              <Tr key={result.id}>
                <Td width='20px'  padding='0'>
                  <IconButton 
                    variant='ghost'
                    aria-label='star'
                    color='gray.600'
                    fontSize='2xl'
                    id={result.id}
                    onClick={toggleStarred}
                    icon={result.isStarred ? <PiStarFill/> : <PiStar/>}
                  />
                </Td>
                <Td maxWidth='200px'><ResultCard {...result}/></Td>
                <Td maxWidth='300px' whiteSpace='pre-wrap'>{result.abstract}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex justifyContent='center' marginTop='1em'>
          <Button variant='outline'>Show more</Button>  
        </Flex>
      </TableContainer>
    </Box>
  )
}
