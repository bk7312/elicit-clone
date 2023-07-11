import { Button } from "@chakra-ui/react";
import { PiCheckLight } from "react-icons/pi";
import { MouseEvent } from "react";

interface ButtonProps {
  key: number;
  toggle: (e: MouseEvent<HTMLButtonElement>) => void;
  children: string;
  isChecked: boolean;
}

export default function Sidebar({ toggle, isChecked, children }: ButtonProps) {
  return (
    <Button
      width="calc(100% - 1em)"
      id={children}
      fontSize="sm"
      paddingY="0.5em"
      paddingX="1em"
      marginY="3px"
      fontWeight="normal"
      onClick={toggle}
      backgroundColor={isChecked ? "messenger.50" : ""}
      _hover={{ backgroundColor: `${isChecked ? "messenger.50" : "gray.100"}` }}
      justifyContent={isChecked ? "space-between" : "flex-start"}
      rightIcon={isChecked ? <PiCheckLight /> : <></>}
    >
      {children}
    </Button>
  );
}
