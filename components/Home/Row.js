import { Flex, Image } from "@chakra-ui/react";

const Row = ({ rowHeight, contentPosition, imageSource }) => {
  return (
    <Flex h={rowHeight} border="1px solid grey" m="2px" maxW="100vw">
      <Image
        w="100vw"
        src={imageSource}
        alt="text"
        objectFit="cover"
      />
    </Flex>
  );
};

export default Row;
