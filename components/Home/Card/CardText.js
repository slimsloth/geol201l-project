import { Text } from "@chakra-ui/react";

const CardText = ({ text }) => {
  return (
    <Text
      mt="4"
      fontSize={["md", "lg"]}
      lineHeight="1.5"
      fontWeight="400"
      color="#d1d1d3"
    >
      {text}
    </Text>
  );
};

export default CardText;
