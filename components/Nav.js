import { Flex, Link, Heading } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex>
      <Link href="/">Home</Link>
      <Link href="/history">History</Link>
      <Link href="/nature">Nature</Link>
      <Link href="/about">About</Link>
    </Flex>
  );
};

export default Nav;
