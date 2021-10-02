import {
  Flex,
  Link,
  Heading,
  Icon,
  HStack,
  useDisclosure,
  IconButton,
  Spacer,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { SiGoogleearth } from "react-icons/si";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      direction={["column", "row"]}
      backgroundColor="#0b0d12"
      color="#b6b6b8"
      p={["2", "4"]}
      w="100%"
      borderBottom="2px solid #26282c"
      align="baseline"
      position="sticky"
      top="0"
      zIndex={10}
    >
      <Flex align="center" w="100%">
        <IconButton
          backgroundColor="#0b0d12"
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={["block", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <Spacer display={["block", "none"]} />
        <Icon as={SiGoogleearth} mr={[2, 2]} color="#009ae4" />
        <Heading
          size={["sm", "md"]}
          mr={[2, 8]}
          color="#009ae4"
          userSelect="none"
        >
          Yellowstone Park
        </Heading>
        <Spacer display={["block", "none"]} />
        <HStack spacing={4} display={["none", "flex"]}>
          <Link href="/" mr={[1, 2]}>
            Home
          </Link>
          <Link href="/history" mr={[1, 2]}>
            History
          </Link>
          <Link href="/nature" mr={[1, 2]}>
            Nature
          </Link>
          <Link href="/about" mr={[1, 2]}>
            About
          </Link>
        </HStack>
      </Flex>
      {isOpen ? (
        <Flex display={{ md: "none" }} direction="column">
          <VStack
            divider={<StackDivider borderColor="#b6b6b8" />}
            align="stretch"
            justify="stretch"
          >
            <Link href="/">Home</Link>
            <Link href="/history">History</Link>
            <Link href="/nature">Nature</Link>
            <Link href="/about">About</Link>
          </VStack>
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default Nav;
