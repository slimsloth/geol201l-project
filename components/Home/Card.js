import { Flex, Heading, Text, Image, Spacer } from "@chakra-ui/react";

const Card = ({ imageSource }) => {
  return (
    <Flex
      direction="column"
      h={["400px","551px"]}
      w={["100%", "50%"]}
      border="1px solid #26282c"
      m={["0px","2px"]}
      textAlign="center"
      _hover={{ borderColor: "#3182ce" }}
    >
      <Image
        alt="alt text"
        borderBottom="1px solid #2a2c30"
        src={imageSource}
        objectFit="cover"
        h={["50%","65%"]}
      />
      <Heading
        mt="4"
        as="h3"
        fontSize={["md", "xl"]}
        lineHeight="1.5"
        textTransform="uppercase"
        fontWeight="400"
        color="#d1d1d3"
      >
        Lorem ipsum dolor
      </Heading>
      <Heading
        as="h2"
        fontSize={["2xl", "4xl"]}
        lineHeight="1.5"
        fontWeight="700"
      >
        Lorem ipsum dolor sit.
      </Heading>
      <Text
        mt="4"
        fontSize={["md", "lg"]}
        lineHeight="1.5"
        fontWeight="400"
        color="#d1d1d3"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </Flex>
  );
};

export default Card;
