import { Flex, Link, Heading } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex>
      <Heading>This is the nav bar</Heading>
      <Link>Home</Link>
      <Link>History</Link>
      <Link>Nature</Link>
      <Link>About</Link>
    </Flex>
  );
};

export default Nav;
