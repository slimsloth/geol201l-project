import { Heading, Flex, Image, Link } from "@chakra-ui/react";

const Stack = () => {
  return (
    <Flex direction="column">
      <Heading textAlign="center">Technologies used</Heading>
      <Flex flexShrink="0" wrap="wrap" align="center" justify="space-between">
        <Link href="https://reactjs.org/" isExternal>
          <Image w="3xs" src="./assets/react-logo.png" alt="react logo" />
        </Link>
        <Link href="https://chakra-ui.com/" isExternal>
          <Image w="3xs" src="./assets/chakra-logo.png" alt="chakra logo" />
        </Link>
        <Link href="https://vercel.com/" isExternal>
          <Image w="3xs" src="./assets/vercel.png" alt="vercel logo" />
        </Link>
        <Link href="https://nextjs.org/" isExternal>
          <Image w="3xs" src="./assets/nextjs.png" alt="nextjs logo" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Stack;
