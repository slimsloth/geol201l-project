import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Banner from "../components/Home/Banner/Banner";
import Card from "../components/Home/Card";
import Row from "../components/Home/Row";

export default function Home() {
  return (
    <Flex direction="column" w="100vw" >
      <Head>
        <title>Yellowstone | Home</title>
        <meta
          name="Project website for GEOL-201L at CSUF"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Flex wrap={["wrap","nowrap"]}>
        <Card imageSource="/img/buffalo.jpg" />
        <Card imageSource="/img/erupt.jpg" />
      </Flex>
      <Row rowHeight="300px" imageSource="/img/prismatic.jpg" contentPosition="right"/>
      <Row rowHeight="480px" imageSource="/img/spring.jpg" contentPosition="center"/>
      <Row rowHeight="480px" imageSource="/img/prettylake.webp" contentPosition="center"/>
      <Row rowHeight="300px" imageSource="/img/people.jpg" contentPosition="right"/>
      <Flex wrap={["wrap","nowrap"]}>
        <Card imageSource="/img/lake.jpg" />
        <Card imageSource="/img/natgeo.webp" />
      </Flex>
      <Row rowHeight="480px" imageSource="/img/river.jpeg" contentPosition="right"/>
      <Row rowHeight="480px" imageSource="/img/essence.jpg" contentPosition="left"/>
    </Flex>
  );
}
