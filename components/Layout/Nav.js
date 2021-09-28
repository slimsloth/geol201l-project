import { Flex, Link, Heading } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex
      backgroundColor="#0b0d12"
      color="#b6b6b8"
      p="4"
      borderBottom="2px solid #26282c"
    >
      <Link href="/" mr="4">
        Home
      </Link>
      <Link href="/history" mr="4">
        History
      </Link>
      <Link href="/nature" mr="4">
        Nature
      </Link>
      <Link href="/about" mr="4">
        About
      </Link>
    </Flex>
  );
};

export default Nav;
