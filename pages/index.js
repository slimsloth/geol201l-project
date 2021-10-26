import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Banner from "../components/Home/Banner/Banner";
import Card from "../components/Home/Card/Card";
import Row from "../components/Home/Row/Row";
import BannerMobile from "../components/Home/Banner/BannerMobile";
import BannerNewsMobile from "../components/Home/Banner/BannerNewsMobile";

export default function Home() {
  return (
    <Flex direction="column" w="100%">
      <Head>
        <title>Yellowstone | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Project website for GEOL-201L at CSUF"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <BannerMobile />
      <BannerNewsMobile />
      <Flex wrap={["wrap", "nowrap"]}>
        <Card
          imageSource="/img/buffalo.jpg"
          caption="Short Article"
          header="Wildlife of Yellowstone"
          text="Learn about the wildlife in the park."
        />
        <Card
          imageSource="/img/erupt.jpg"
          caption="Park Essentials"
          header="Geysers of Yellowstone"
          text="Read up on how geysers formed in the park."
        />
      </Flex>
      <Row
        rowHeight="300px"
        imageSource="/img/prismatic.jpg"
        contentPosition="right"
        caption="National Geographic"
        header="America's National Parks"
        buttonLink="https://youtu.be/7OMxBlK46wY"
        buttonText="Watch Now"
      />
      <Row
        rowHeight="480px"
        imageSource="/img/spring.jpg"
        contentPosition="center"
        caption="The Yellowstone Super Volcano"
        header="Yellowstone Caldera"
        buttonLink="/articles/loremipsum"
        buttonText="Read Article"
      />
      <Row
        rowHeight="480px"
        imageSource="/img/prettylake.webp"
        contentPosition="center"
        caption="Park Biology"
        header="Flora &amp; Fauna"
        buttonLink="/articles/loremipsum"
        buttonText="Learn more"
      />
      <Row
        rowHeight="300px"
        imageSource="/img/people.jpg"
        contentPosition="right"
        caption="History"
        header="Creation of the Park"
        buttonLink="/articles/loremipsum"
        buttonText="Learn more"
      />
      <Flex wrap={["wrap", "nowrap"]}>
        <Card
          imageSource="/img/lake.jpg"
          caption="Park Essentials"
          header="Earthquakes"
          text="Earthquakes in the park, and what they mean."
        />
        <Card
          imageSource="/img/natgeo.webp"
          caption="Park Essentials"
          header="What is a National Park?"
          text="Learn how to protect the geologic resources of a nature."
        />
      </Flex>
      <Row
        rowHeight="480px"
        imageSource="/img/river.jpeg"
        contentPosition="right"
        caption="Yellowstone Essentials"
        header="Climate"
        buttonLink="/articles/loremipsum"
        buttonText="Learn more"
      />
      <Row
        rowHeight="480px"
        imageSource="/img/essence.jpg"
        contentPosition="left"
        caption="Inspiration and References"
        header="About This Website"
        buttonLink="/articles/loremipsum"
        buttonText="Learn more"
      />
    </Flex>
  );
}
