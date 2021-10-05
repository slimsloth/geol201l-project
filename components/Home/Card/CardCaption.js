import { Heading } from "@chakra-ui/react";
const CardCaption = ({ caption }) => {
  return (
    <Heading
      mt="4"
      as="h3"
      fontSize={["md", "xl"]}
      lineHeight="1.5"
      textTransform="uppercase"
      fontWeight="400"
      color="#d1d1d3"
    >
      {caption}
    </Heading>
  );
};

export default CardCaption;
