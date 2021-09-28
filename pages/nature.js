import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

const Nature = () => {
  return (
    <Flex>
      <Head>
        <title>Yellowstone | Home</title>
        <meta
          name="Project website for GEOL-201L at CSUF"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>This is the nature page.</Heading>
    </Flex>
  );
};

export default Nature;
