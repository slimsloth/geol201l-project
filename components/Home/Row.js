import { Flex, Image, Heading, Button } from "@chakra-ui/react";

const Row = ({
  rowHeight,
  contentPosition,
  imageSource,
  children,
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
        align="center"
        justify="center"
      >
        <Flex direction="column" justify="center" align="center" p="4">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Row;
