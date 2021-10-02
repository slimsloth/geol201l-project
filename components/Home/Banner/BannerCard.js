import { Flex, Heading } from "@chakra-ui/react";

const BannerCard = ({ imageSrc }) => {
  return (
    <Flex
      direction="column-reverse"
      backgroundColor="#0b0d12"
      border="1px solid #26282c"
      borderRadius="md"
      w="23vw"
      h="23vh"
      bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(62, 63, 64, 0.5)),url(${imageSrc})`}
      bgPosition="center"
      backgroundSize="cover"
      bgRepeat="no-repeat"
      p="4"
      _hover={{ borderColor: "#3182ce" }}
    >
      <Heading size="md" fontSize="1.44rem" fontWeight="700">
        Lorem ipsum dolor sit amet
      </Heading>
      <Heading size="sm" fontSize="1.2rem" color="#cacaca" fontWeight="400">
        September 27, 2021
      </Heading>
    </Flex>
  );
};

export default BannerCard;
