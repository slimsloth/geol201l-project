import Footer from "./Footer";
import Nav from "./Nav";
import { Box, Flex } from "@chakra-ui/layout";

const Layout = ({ children }) => {
  return (
    <Flex
      direction="column"
      backgroundColor="#161b22"
      color="white"
      maxW="100vw"
      w="-webkit-fit-content"
    >
      <Nav />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;
