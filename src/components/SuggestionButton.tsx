import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

interface ButtonProps {
  children: string;
  key: number;
}

export default function SuggestionButton({ children }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      color="gray.500"
      width="100%"
      justifyContent="flex-start"
      onClick={() => navigate(`/search?q=${children}`)}
      leftIcon={<FiSearch />}
    >
      {children}
    </Button>
  );
}
