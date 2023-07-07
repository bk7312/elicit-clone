
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

interface ButtonProps {
  children: string
  key: number
}

export default function SuggestionButton({children, key}: ButtonProps) {

  return (
    <Link to={`/search?q=${children}`}>
      <Button
        key={key}
        variant='ghost'
        color='gray.500'
        width="100%"
        justifyContent="flex-start"
        leftIcon={<FiSearch />}
      >{children}</Button>
    </Link>
  )
}
