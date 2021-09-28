import Footer from "./Footer";
import Nav from "./Nav";
import { Box } from "@chakra-ui/layout";

const Layout = ({ children }) => {
  return (
    <Box backgroundColor="#161b22" color="white" minH="100vh">
      <Nav />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;