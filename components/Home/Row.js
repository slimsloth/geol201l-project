import { Flex, Image, Heading, Button } from "@chakra-ui/react";

const Row = ({
  rowHeight,
  contentPosition,
  imageSource,
  caption,
  header,
  text,
}) => {
  let gradient = "";
  let dir = "";
  switch (contentPosition) {
    case "left":
      gradient = "linear(to-r, #060606, transparent)";
      dir = "row";
      break;
    case "center":
      gradient = "linear(to-b, #060606, transparent)";
      dir = "column";
      break;
    case "right":
      gradient = "linear(to-l, #060606, transparent)";
      dir = "row-reverse";
      break;
    default:
      gradient = "linear(to-t, #060606, transparent)";
      break;
  }

  return (
    <Flex h={rowHeight} my="2px" w="100%">
      <Image w="100vw" src={imageSource} alt="text" objectFit="cover" />
      <Flex
        direction={dir}
        position="absolute"
        w="100%"
        h={rowHeight}
        bgGradient={gradient}
        p="8"
      >
        <Flex direction="column" justify="center" align="center" p="4">
          <Heading
            fontSize="xl"
            lineHeight="1.5"
            fontWeight="400"
            textTransform="uppercase"
            color="#d1d1d3"
          >
            Lorem ipsum dolor sit amet.
          </Heading>
          <Heading fontSize="4xl" lineHeight="1.5" fontWeight="700">
            Lorem ipsum
          </Heading>
          <Button colorScheme="blue" variant="outline" isFullWidth={false} w="xs">
            Read Article
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Row;
