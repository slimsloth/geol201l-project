import { Heading } from "@chakra-ui/react";
const CardHeader = ({ header }) => {
  return (
    <Heading
      as="h2"
      fontSize={["2xl", "4xl"]}
      lineHeight="1.5"
      fontWeight="700"
    >
      {header}
    </Heading>
  );
};

export default CardHeader;
