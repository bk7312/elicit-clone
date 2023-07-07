
import { 
  Box,
  Flex,
  Heading,
  Text, 
  // Switch,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
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
  // ModalHeader,
  // ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

// import { HiChevronDown } from 'react-icons/hi'
import { PiStar, PiStarFill } from 'react-icons/pi'
import { FiSearch } from 'react-icons/fi'

import { useState, MouseEvent } from 'react'
import ResultInfo from './ResultInfo'
import ResultsHeader from './ResultsHeader'

interface ResultsProps {
  searchInput: string
}

export default function Results({ searchInput }: ResultsProps) {

  // todo 
  // move logic to /search and pass to Results as props
  // filtering logic, how to make table scrollable (abstract summary and additional cols)
  // while keeping paper title fixed in place
  // starred to be saved to localStorage and viewable from Starred
  // delete icon to appear on hover?

  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()

  const sectionHeadings = ['', 'Paper title', 'Abstract summary']

  const [resultsData, setResultsData] = useState([{
    id: '1',
    title: `A brief review of ${searchInput}`,
    author: ['Author', 'Writer', 'Editor'],
    journal: 'Journal',
    isStarred: true,
    year: 2030,
    citations: 10,
    doi: 'https://doi.org/',
    abstract: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem rem assumenda unde obcaecati asperiores nemo doloribus eaque ipsum repudiandae necessitatibus odit accusamus iusto, dolore et corrupti distinctio! Sed doloribus quam est quis mollitia aliquam ad deserunt quibusdam quo, ipsam eum fugiat quidem fugit molestias adipisci dicta. Consequatur esse accusamus odit nobis ut quam eos sunt labore, distinctio sint asperiores, omnis quisquam nisi illum blanditiis nostrum accusantium. Sint delectus, fuga nisi quaerat explicabo facere velit minima assumenda, amet mollitia sunt. Cumque blanditiis doloribus expedita? Sunt corrupti molestiae perferendis natus quia ullam enim temporibus qui. Reprehenderit nam dolores iure quia, quos blanditiis.',
  }, {
    id: '2',
    title: `A meta-analysis of ${searchInput}`,
    author: ['AuthorA', 'WriterB', 'EditorC'],
    journal: 'Journal1',
    isStarred: false,
    year: 1999,
    citations: 100,
    doi: 'https://doi.org/',
    abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda voluptatem sunt repellendus sed natus debitis cum vero ratione error corrupti quo pariatur, voluptas veniam quidem itaque nulla ut illum officia voluptate id. Aliquam, eligendi sed? Obcaecati non deserunt quae eligendi alias dicta quaerat, assumenda dignissimos sequi fuga quisquam reprehenderit?',
  }, {
    id: '3',
    title: `${searchInput}: A quantitative analysis`,
    author: ['Author12', 'Writer12', 'Editor12'],
    journal: 'Journal12',
    isStarred: false,
    year: 123,
    citations: 123,
    doi: 'https://doi.org/',
    abstract: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim labore voluptatem quia eligendi minima rem illum nesciunt doloremque iure cupiditate atque autem eos iste doloribus veniam sapiente magni, placeat nihil obcaecati. Architecto, ullam. Ea asperiores consequuntur dolorum doloribus? Reprehenderit dolore non vel unde optio repudiandae numquam perferendis amet modi harum deserunt obcaecati sint debitis vero, accusantium suscipit. Iure nulla quibusdam ullam explicabo voluptates, excepturi fugiat natus, rem inventore eum voluptate error repellendus veritatis, adipisci eos! Totam impedit voluptatibus reiciendis nostrum?',
  }])

  const [modalData, setModalData] = useState({
    id: '',
    title: '',
    author: [''],
    journal: '',
    isStarred: false,
    year: 0,
    citations: 0,
    doi: '',
    abstract: '',
  })

  function toggleStarred(e: MouseEvent<HTMLButtonElement> ) {
    e.stopPropagation()
    const id = e.currentTarget.id
    setResultsData(prev => prev.map(el => el.id === id ? {...el, isStarred: !el.isStarred} : el))
  } 

  function openModal(id: string) {
    const paper = resultsData.filter(result => result.id === id)
    setModalData(paper[0])
    onModalOpen()
  }

  return (
    <Box 
      backgroundColor='white' 
      paddingY='1em' 
      marginY='1em' 
      marginRight='1em'
      borderRadius='10px' 
      width='100%' 
      maxWidth='full' 
      boxShadow='sm'
    >
      <ResultsHeader />

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
            {sectionHeadings.map(heading => (<Th key={heading}>{heading}</Th>))}
            </Tr>
          </Thead>
          <Tbody>
            {resultsData.map(result => (
              <Tr 
                key={result.id} 
                cursor='pointer'
                onClick={() => openModal(result.id)} 
                _hover={{backgroundColor: 'gray.50'}}
              >
                <Td width='20px' paddingLeft='1.3rem' paddingRight='0'>
                  <IconButton 
                    variant='ghost'
                    aria-label='star'
                    color='gray.500'
                    fontSize='2xl'
                    id={result.id}
                    onClick={toggleStarred}
                    icon={result.isStarred ? <PiStarFill/> : <PiStar/>}
                  />
                </Td>
                <Td maxWidth='200px'><ResultInfo {...result} titleFontSize='md'/></Td>
                <Td maxWidth='300px' whiteSpace='pre-wrap'>{result.abstract}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex justifyContent='center' marginTop='1em'>
          <Button variant='outline'>Show more</Button>  
        </Flex>
      </TableContainer>

      <Modal 
        isOpen={isModalOpen} 
        onClose={onModalClose} 
        isCentered 
        size='6xl'
      >
        <ModalOverlay/>
        <ModalContent >
          <ModalCloseButton/>
          <ModalBody padding='0'>
            <Flex 
              color='gray.600'
              borderRadius='5px' 
              justifyContent='center' 
              alignItems='center'
            >
              <Box width='50%' maxHeight='90vh' overflowY='auto'>
                <Box padding='2em'>
                  <ResultInfo {...modalData} titleFontSize='4xl'/>
                  <br/>
                  <Box paddingY='1em' borderTop='1px solid' borderTopColor='gray.200'>
                    <Text fontWeight='bold'>Abstract summary</Text>
                    <Text marginTop='1em'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.</Text>
                    <Text fontWeight='bold' marginTop='1em'>What did they test?</Text>
                    <Text marginTop='1em'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.</Text>
                    <Text fontWeight='bold' marginTop='1em'>What outcomes did they measure?</Text>
                    <Text marginTop='1em'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.</Text>
                    <Text fontWeight='bold' marginTop='1em'>Population characteristics</Text>
                    <Text marginTop='1em'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.</Text>
                  </Box>
                </Box>
                <Box 
                  position='sticky' 
                  background='white' 
                  bottom='0' 
                  width='full' 
                  padding='0.5em' 
                  borderTop='1px solid' 
                  borderTopColor='gray.200'
                >
                  <InputGroup>
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
                      type='text'
                      placeholder='Ask a question about this paper'
                      size='lg'
                      focusBorderColor='none'
                      paddingLeft='3rem'
                    />
                    <InputRightElement
                      width='fit-content'
                      marginX='2'
                      marginY='1'
                    >
                      <Button
                        backgroundColor='messenger.600'
                        color='white'
                        size='sm'
                        _hover={{ bg: 'messenger.700' }}
                      >
                        Ask
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Box>
              <Box width='50%' padding='2em' overflowY='auto' maxHeight='90vh' backgroundColor='gray.50' color='gray.600'>
                <Heading fontSize='2xl'>Abstract</Heading>
                <Text marginTop='1em'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ullam nam asperiores commodi, quisquam earum ducimus eveniet tempore nemo architecto natus suscipit corrupti molestiae molestias dignissimos qui saepe, accusamus ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.</Text>
                <Heading fontSize='2xl' marginTop='1em'>Section</Heading>
                <Text marginTop='1em'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque deserunt corporis ipsam laborum saepe ipsa! Maiores voluptas delectus eaque incidunt assumenda dolor cum veritatis, tenetur iste recusandae numquam consequatur deserunt nostrum harum, odit, ipsam non nihil tempora? Animi unde quasi suscipit in, rem corrupti officiis labore reprehenderit voluptates, explicabo voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.</Text>
                <Text marginTop='1em'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.</Text>
                <Heading fontSize='2xl' marginTop='1em'>Section</Heading>
                <Text marginTop='1em'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, hic recusandae. Sed eius reiciendis dolorum quaerat, ullam quae repellat, ab, aliquid enim numquam eos! Totam accusantium dicta quibusdam ducimus minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.</Text>
                <Text marginTop='1em'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.</Text>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

    </Box>
  )
}
