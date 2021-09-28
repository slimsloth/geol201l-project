import "../styles/globals.css";
import theme from "../styles/theme";
import "@fontsource/maven-pro"
import "@fontsource/open-sans"
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
