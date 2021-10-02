import Footer from "./Footer";
import Nav from "./Nav";
import { Box, Flex } from "@chakra-ui/layout";

const Layout = ({ children }) => {
  return (
    <Box
      direction="column"
      backgroundColor="#161b22"
      color="white"
      w="100vw"
      maxW="100vw"
    >
      <Nav />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
