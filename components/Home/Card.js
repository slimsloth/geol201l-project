import { Flex, Heading, Text, Image, Spacer } from "@chakra-ui/react";

const Card = ({imageSource}) => {
  return (
    <Flex
      direction="column"
      h="551px"
      w="50%"
      border="1px solid #1a497a"
      m="2px"
      textAlign="center"
    >
      <Image
        alt="alt text"
        borderBottom="1px solid #2a2c30"
        src={imageSource}
        objectFit="cover"
        h="65%"
      />
      <Heading
        mt="4"
        as="h3"
        fontSize="1.44rem"
        lineHeight="1.5"
        textTransform="uppercase"
        fontWeight="400"
      >
        Lorem ipsum dolor
      </Heading>
      <Heading as="h2" fontSize="2.986rem" lineHeight="1.5" fontWeight="700">
        Lorem ipsum dolor sit.
      </Heading>
      <Text mt="4" fontSize="1.44rem" lineHeight="1.5" fontWeight="400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </Flex>
  );
};

export default Card;
