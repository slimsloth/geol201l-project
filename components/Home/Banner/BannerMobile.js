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
      bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%),url(banner.jpg)`}
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a accumsan
        augue.
      </Text>
      <Button colorScheme="blue">Explore Yellowstone</Button>
    </Flex>
  );
};

export default BannerMobile;
