import { Flex, Text, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      backgroundColor="#0b0d12"
      color="#b6b6b8"
      p="4"
      w="100%"
      borderTop="2px solid #26282c"
      textAlign="center"
    >
      <Flex justify="space-between" p="1">
        <Link href="https://github.com/slimsloth" isExternal>
          <Icon as={FaGithub} boxSize="35px" p="5px" />
        </Link>
        <Link href="https://www.linkedin.com/in/sean-m-565b14205/" isExternal>
          <Icon as={FaLinkedin} boxSize="35px" p="5px" />
        </Link>
        <Link href="mailto:smitchell36@csu.fullerton.edu">
          <Icon as={FaEnvelope} boxSize="35px" p="5px" />
        </Link>
      </Flex>
      <Text>&copy; 2021 | Created by Sean Mitchell</Text>
    </Flex>
  );
};

export default Footer;
