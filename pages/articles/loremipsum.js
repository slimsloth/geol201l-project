import { Flex, Image, Heading, Text, Box } from "@chakra-ui/react";

const LoremIpsum = () => {
  return (
    <Flex minH="100vh" direction="column" maxW="100%" px="600px" fontSize="xl">
      <Flex direction="column" bgColor="#f8f7f3" color="black" p="4">
        <Heading mt="14">
          Learn Anything Faster By Using The Feynman Technique
        </Heading>
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
        <Image src="/img/spring.jpg" alt="banner" borderRadius="sm" mb="8" />
        <Text>
          Richard Feynman is considered to be one of the most miraculous
          personalities in scientific history. The 1965 Nobel prize winner on
          QED (along with J. Schwinger and Tomonaga), Dr. Feynman was a
          remarkably amazing educator and a great physicist. Feynman, along with
          many other contributions to science, had created a mathematical theory
          that accounts for the phenomenon of superfluidity in liquid helium.
          Thereafter, he had fundamental contributions (along with Murray
          Gell-Mann) to weak interactions such as beta decay.
        </Text>
        <Box h="20px" />
        <Text>
          The genius of Richard Feynman in evident from his three-volume books
          on physics called The Feynman Lectures on Physics, which are based on
          his lectures at Caltech during 1961–1963.
        </Text>
        <Box h="20px" />
        <Text>
          In his teenage years, Richard Feynman’s high school did not offer any
          courses on calculus. As a high-school teenager, he decided to teach
          himself calculus and read Calculus for the Practical Man.
        </Text>
      </Flex>
    </Flex>
  );
};

export default LoremIpsum;
