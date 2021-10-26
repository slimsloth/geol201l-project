import { Flex, Image, Heading, Text } from "@chakra-ui/react";

const LoremIpsum = () => {
  return (
    <Flex minH="100vh" direction="column" maxW="100%" px="72">
      <Heading mt="14">Learn Anything Faster By Using The Feynman Technique</Heading>
      <Flex py="8" align="center">
        <Image
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
          borderRadius="full"
          boxSize="50px"
          mr="2"
        />
        <Flex direction="column">
          <Text>Sean Mitchell</Text>
          <Text>Oct 9 | 6 min read</Text>
        </Flex>
      </Flex>
      <Image src="/img/spring.jpg" alt="banner" borderRadius="sm"/>
      Howdy I&apos;m an article
    </Flex>
  );
};

export default LoremIpsum;
