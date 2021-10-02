import { Flex, Link, Heading, Icon } from "@chakra-ui/react";
import { SiGoogleearth } from "react-icons/si";
const Nav = () => {
  return (
    <Flex
      backgroundColor="#0b0d12"
      color="#b6b6b8"
      p="4"
      borderBottom="2px solid #26282c"
      align="baseline"
      position="sticky"
      top="0"
      zIndex={10}
    >
      <Icon as={SiGoogleearth} mr="2" color="#009ae4"/>
      <Heading size="md" mr="8" color="#009ae4" userSelect="none">
        Yellowstone Park
      </Heading>
      <Link href="/" mr="2">
        Home
      </Link>
      <Link href="/history" mr="2">
        History
      </Link>
      <Link href="/nature" mr="2">
        Nature
      </Link>
      <Link href="/about" mr="2">
        About
      </Link>
    </Flex>
  );
};

export default Nav;
