
import Sidebar from '../components/Sidebar'
import Results from '../components/Results'
import { 
  Flex,
  // Heading, 
  // Text, 
  // Button,
} from '@chakra-ui/react'

export default function Search() {

  // searchbar in header (!!)

  // sidebar and results in flex container, toggle show/hide sidebar
  // pass search params to sidebar as searchInput
  // add dummy data
  // add logic to handle results filter
  // implement result modal
  // full page height background

  // sidebar should be fixed in position and take up at most the whole screen height
  // shrinking down the summary and infoButton section as required, up to a minimum height

  // results should scroll with the page

  // further improvement on result, sticky the filter/sortby header?

  return (
    <Flex backgroundColor='gray.50'>
      <Sidebar searchInput='Placeholder search term'/>
      <Results/>
    </Flex>
  )
}
