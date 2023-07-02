
import { Flex, Heading, Text, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'


export default function Landing() {

  return (
    <Flex 
      maxWidth='3xl' 
      margin='auto' 
      direction='column' 
      justifyContent='center'
      height='85dvh' 
      padding='4'
      //border='1px solid black'
    >
      <Heading fontSize='5xl' textAlign='center'>The AI Research Assistant</Heading>
      <Text marginTop='2em'>Elicit can find relevant papers without perfect keyword match, summarize takeaways from the paper specific to your question, and extract key information from the papers.</Text>
      <Text marginTop='1em'>Elicit uses language models to help you automate research workflows, like parts of literature review.</Text>
      <Text marginTop='1em'>While answering questions with research is the main focus of Elicit, there are also other research tasks that help with brainstorming, summarization, and text classification.</Text>
      <Link to='signup'>
        <Button colorScheme='messenger' marginTop='4em' width='fit-content'>Sign up</Button>
      </Link>
    </Flex>
  )
}
