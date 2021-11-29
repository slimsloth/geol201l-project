import Head from "next/head";
import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Banner from "../components/Home/Banner/Banner";
import Card from "../components/Home/Card/Card";
import Row from "../components/Home/Row/Row";
import BannerMobile from "../components/Home/Banner/BannerMobile";
import BannerNewsMobile from "../components/Home/Banner/BannerNewsMobile";
import FeaturesModal from "../components/Home/Modals/FeaturesModal";

export default function Home() {
  const [features, openFeatures] = useState(false);
  const [geothermal, openGeothermal] = useState(false);
  const [cougars, openCougars] = useState(false);
  const [bears, openBears] = useState(false);

  const cardClick = (card) => {
    switch (card) {
      case "features":
        openFeatures(true);
        break;
      case "geothermal":
        openGeothermal(true);
        break;
      case "cougars":
        openCougars(true);
        break;
      case "bears":
        openBears(true);
        break;
    }
  };
  return (
    <Flex direction="column" w="100%">
      <Head>
        <title>Yellowstone | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Project website for GEOL-201L at CSUF"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Banner />
      <BannerMobile />
      <BannerNewsMobile />
      <Flex wrap={["wrap", "nowrap"]}>
        <Card
          imageSource="/img/buffalo.jpg"
          caption="Quick Facts"
          header="Park Features"
          text="Learn about the wildlife in the park."
          clickHandler={openFeatures}
        />
        <Card
          imageSource="/img/erupt.jpg"
          caption="Organisms living in heat"
          header="Geothermal Life"
          text="Read up on how these organisms survive in this unique environment."
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
        external={true}
      />
      <Row
        rowHeight="480px"
        imageSource="/img/spring.jpg"
        contentPosition="center"
        caption="The Yellowstone Super Volcano"
        header="Park History"
        buttonLink="/articles/park_history"
        buttonText="Read Article"
      />
      <Row
        rowHeight="480px"
        imageSource="/img/prettylake.webp"
        contentPosition="center"
        caption="Plumbing of Old Faithful"
        header="Old Faithful"
        buttonLink="/articles/loremipsum"
        buttonText="Learn more"
      />
      <Row
        rowHeight="300px"
        imageSource="/img/people.jpg"
        contentPosition="right"
        caption="Super Volcano"
        header="Yellowstone Caldera"
        buttonLink="/articles/loremipsum"
        buttonText="Learn more"
      />
      <Flex wrap={["wrap", "nowrap"]}>
        <Card
          imageSource="/img/lake.jpg"
          caption="Park Wildlife"
          header="Gray Wolves"
          text="Earthquakes in the park, and what they mean."
        />
        <Card
          imageSource="/img/natgeo.webp"
          caption="Park Wildlife"
          header="Black Bears"
          text="Learn how to protect the geologic resources of a nature."
        />
      </Flex>
      <Row
        rowHeight="480px"
        imageSource="/img/river.jpeg"
        contentPosition="right"
        caption="Park Wildlife"
        header="Bison"
        buttonLink="/articles/loremipsum"
        buttonText="Learn more"
      />
      <Row
        rowHeight="480px"
        imageSource="/img/essence.jpg"
        contentPosition="left"
        caption="Inspiration and References"
        header="About This Website"
        buttonLink="/about"
        buttonText="Learn more"
      />
      <FeaturesModal isOpen={features} onClose={() => openFeatures(false)}/>
    </Flex>
  );
}
