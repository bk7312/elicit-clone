import { FaRegQuestionCircle, FaRegStar, FaListUl } from "react-icons/fa";

import { PiShieldBold, PiDownloadBold, PiUserCircleBold } from "react-icons/pi";

import { FiLogOut } from "react-icons/fi";
import { TbLayoutGrid } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

import {
  Button,
  ButtonGroup,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Flex,
  Tooltip,
} from "@chakra-ui/react";

import { forwardRef } from "react";

interface UserProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfilePopover = forwardRef<HTMLButtonElement>((props, ref) => (
  <PopoverTrigger>
    <IconButton
      aria-label="profile"
      color="gray.500"
      icon={<PiUserCircleBold />}
      {...props}
      ref={ref}
    />
  </PopoverTrigger>
));

export default function Header({ isLoggedIn, setIsLoggedIn }: UserProps) {
  const navigate = useNavigate();

  function logout() {
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      paddingY="2"
      paddingX="4"
    >
      <Button
        variant="link"
        fontSize="xl"
        color="gray.500"
        onClick={() => navigate("/")}
        _hover={{ textDecoration: "none" }}
      >
        Elicit Clone
      </Button>

      <Flex as="nav" alignItems="center" justifyContent="space-between">
        <ButtonGroup variant="ghost">
          <Button
            leftIcon={<FaRegQuestionCircle />}
            color="gray.500"
            onClick={() => navigate("/faq")}
          >
            FAQ
          </Button>

          {isLoggedIn ? (
            <>
              <Button
                leftIcon={<TbLayoutGrid />}
                color="gray.500"
                onClick={() => navigate("/tasks")}
              >
                Tasks
              </Button>

              <Button
                leftIcon={<FaRegStar />}
                color="gray.500"
                onClick={() => navigate("/starred")}
              >
                Starred
              </Button>

              <Popover>
                <Tooltip label="Account settings">
                  <ProfilePopover />
                </Tooltip>

                <PopoverContent width="min-content">
                  <PopoverHeader padding="1">
                    <Button
                      color="gray.500"
                      width="100%"
                      justifyContent="flex-start"
                      leftIcon={<PiUserCircleBold />}
                    >
                      UserName
                    </Button>
                  </PopoverHeader>

                  <PopoverBody padding="1">
                    <Button
                      color="gray.500"
                      width="100%"
                      justifyContent="flex-start"
                      leftIcon={<PiDownloadBold />}
                    >
                      Download Desktop app
                    </Button>
                    <Button
                      color="gray.500"
                      width="100%"
                      justifyContent="flex-start"
                      leftIcon={<FaListUl />}
                      onClick={() => navigate("/terms")}
                    >
                      Terms of service
                    </Button>
                    <Button
                      color="gray.500"
                      width="100%"
                      justifyContent="flex-start"
                      leftIcon={<PiShieldBold />}
                      onClick={() => navigate("/privacy")}
                    >
                      Privacy policy
                    </Button>
                  </PopoverBody>

                  <PopoverFooter padding="1">
                    <Button
                      color="gray.500"
                      leftIcon={<FiLogOut />}
                      width="100%"
                      justifyContent="flex-start"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            </>
          ) : (
            <Button color="gray.500" onClick={() => navigate("/login")}>
              Log in
            </Button>
          )}
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
