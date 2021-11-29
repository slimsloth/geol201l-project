import {
  Flex,
  Link,
  LinkOverlay,
  LinkBox,
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
import "@fontsource/lobster"

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

        <LinkBox mr={[1, 2]}>
          <LinkOverlay href="/">
            <Flex align="center">
              <Icon as={SiGoogleearth} mr={[2, 2]} color="#009ae4" boxSize="20px"/>
              <Heading
                size={["sm", "lg"]}
                mr={[2, 8]}
                color="#009ae4"
                userSelect="none"
                fontFamily="lobster"
                fontSize="xl"
              >
                Yellowstone Park
              </Heading>
            </Flex>
          </LinkOverlay>
        </LinkBox>

        <Spacer display={["block", "none"]} />
        <HStack spacing={4} display={["none", "flex"]}>
          <Link href="/articles/history" mr={[1, 2]}>
            Park History
          </Link>
          <Link href="/articles/old_faithful" mr={[1, 2]}>
            Old Faithful
          </Link>
          <Link href="/articles/caldera" mr={[1, 2]}>
            Yellowstone Caldera
          </Link>
          <Link href="/articles/bison" mr={[1, 2]}>
            Bison
          </Link>
          <Link href="/articles/about" mr={[1, 2]}>
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
            <Link href="/articles/history">Park History</Link>
            <Link href="/articles/old_faithful">Old Faithful</Link>
            <Link href="/articles/caldera">Yellowstone Caldera</Link>
            <Link href="/articles/bison">Bison</Link>
            <Link href="/articles/about">About</Link>
          </VStack>
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default Nav;
