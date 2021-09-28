import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      direction="column"
      backgroundColor="#0b0d12"
      color="#b6b6b8"
      p="4"
      borderTop="2px solid #26282c"
      textAlign="center"
    >
      <Text>&copy; 2021 Sean Mitchell</Text>
    </Flex>
  );
};

export default Footer;
