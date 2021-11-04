import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import References from "../components/About/References";
import Stack from "../components/About/Stack";
import Summary from "../components/About/Summary";

const About = () => {
  return (
    <Flex direction="column" minH="100vh" px="72" py="12" fontSize="xl">
      <Head>
        <title>Yellowstone | About</title>
        <meta
          name="Project website for GEOL-201L at CSUF"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Summary />
      <References />
      <Stack />
    </Flex>
  );
};

export default About;
