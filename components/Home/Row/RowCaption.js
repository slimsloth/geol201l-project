import { Heading } from "@chakra-ui/react";
const RowCaption = ({ caption }) => {
  return (
    <Heading
      fontSize="xl"
      lineHeight="1.5"
      fontWeight="400"
      textTransform="uppercase"
      color="#d1d1d3"
    >
      {caption}
    </Heading>
  );
};

export default RowCaption;
