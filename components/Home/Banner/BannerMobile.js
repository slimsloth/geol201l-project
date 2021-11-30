import { Flex, Heading, Text, Button } from "@chakra-ui/react";

const BannerMobile = () => {
  return (
    <Flex
      display={["flex", "none"]}
      direction="column"
      align="center"
      justify="center"
      p="8"
      pb="2"
      h="375px"
      w="100%"
      bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%),url(./img/denys-nevozhai-LMU2w-K4J7k-unsplash.jpg)`}
      bgPosition="center"
      backgroundSize="cover"
      bgRepeat="no-repeat"
      textAlign="center"
    >
      <Heading
        textTransform="uppercase"
        fontSize="3xl"
        lineHeight="1.5"
        fontWeight="700"
      >
        Yellowstone
      </Heading>
      <Text
        fontSize="md"
        lineHeight="1.5"
        fontWeight="400"
        color="gray.100"
        mb="5"
      >
        Learn about the first national park.
      </Text>
    </Flex>
  );
};

export default BannerMobile;
