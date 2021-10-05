import { Flex, Heading } from "@chakra-ui/react";

const BannerCard = ({ imageSrc, mt, mb }) => {
  return (
    <Flex
      direction="column-reverse"
      mt={mt}
      mb={mb}
      backgroundColor="#0b0d12"
      border="1px solid #26282c"
      borderRadius="md"
      w={["335px", "23vw"]}
      h={["188px", "23vh"]}
      bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(62, 63, 64, 0.5)),url(${imageSrc})`}
      bgPosition="center"
      backgroundSize="cover"
      bgRepeat="no-repeat"
      p="4"
      _hover={{ borderColor: "#3182ce" }}
    >
      <Heading size="md" fontSize="md" fontWeight="700">
        Lorem ipsum dolor sit amet
      </Heading>
      <Heading size="sm" fontSize="md" color="#cacaca" fontWeight="400">
        September 27, 2021
      </Heading>
    </Flex>
  );
};

export default BannerCard;
