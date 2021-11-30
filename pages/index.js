import Head from "next/head";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Banner from "../components/Home/Banner/Banner";
import Card from "../components/Home/Card/Card";
import Row from "../components/Home/Row/Row";
import BannerMobile from "../components/Home/Banner/BannerMobile";
import FeaturesModal from "../components/Home/Modals/FeaturesModal";
import GeothermalModal from "../components/Home/Modals/GeothermalModal";
import WolvesModal from "../components/Home/Modals/WolvesModal";
import BearsModal from "../components/Home/Modals/BearsModal";

export default function Home() {
  const [features, openFeatures] = useState(false);
  const [geothermal, openGeothermal] = useState(false);
  const [wolves, openWolves] = useState(false);
  const [bears, openBears] = useState(false);

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
      <Flex wrap={["wrap", "nowrap"]}>
        <Card
          imageSource="/img/laura-seaman-6rs0BjK_vx0-unsplash.jpg"
          caption="Quick Facts"
          header="Park Features"
          text="A general overview of the park and why it is so special."
          clickHandler={openFeatures}
        />
        <Card
          imageSource="/img/mariola-grobelska-GyENpmSmuzw-unsplash.jpg"
          caption="Organisms living in heat"
          header="Geothermal Life"
          text="Read up on how these organisms survive in this unique environment."
          clickHandler={openGeothermal}
        />
      </Flex>
      <Row
        rowHeight="300px"
        imageSource="/img/c-z-shi-Ba0RMbU-SP8-unsplash.jpg"
        contentPosition="right"
        caption="National Geographic"
        header="America's National Parks"
        buttonLink="https://youtu.be/7OMxBlK46wY"
        buttonText="Watch Now"
        external={true}
      />
      <Row
        rowHeight="480px"
        imageSource="/img/andrew-sterling-5nigV-Wh7xY-unsplash.jpg"
        contentPosition="center"
        caption="Learn about the history of the park"
        header="Park History"
        buttonLink="/articles/history"
        buttonText="Read Article"
      />
      <Row
        rowHeight="480px"
        imageSource="/img/andrew-sterling-KXloGzKXQLc-unsplash.jpg"
        contentPosition="center"
        caption="Plumbing of Old Faithful"
        header="Old Faithful"
        buttonLink="/articles/old_faithful"
        buttonText="Learn more"
      />
      <Row
        rowHeight="300px"
        imageSource="/img/dan-meyers-BkScvzMN9Nw-unsplash.jpg"
        contentPosition="right"
        caption="Super Volcano"
        header="Yellowstone Caldera"
        buttonLink="/articles/caldera"
        buttonText="Learn more"
      />
      <Flex wrap={["wrap", "nowrap"]}>
        <Card
          imageSource="/img/robert-larsson-jGip_U1fXTI-unsplash.jpg"
          caption="Park Wildlife"
          header="Gray Wolves"
          text="Some quick facts about the pact oriented wolves of Yellowstone."
          clickHandler={openWolves}
        />
        <Card
          imageSource="/img/noaa-8-EyvQ6y77A-unsplash.jpg"
          caption="Park Wildlife"
          header="Black Bears"
          text="A brief overview of black bears."
          clickHandler={openBears}
        />
      </Flex>
      <Row
        rowHeight="480px"
        imageSource="/img/yannick-menard-ISs7qT9fEn8-unsplash.jpg"
        contentPosition="right"
        caption="Park Wildlife"
        header="Bison"
        buttonLink="/articles/bison"
        buttonText="Learn more"
      />
      <Row
        rowHeight="480px"
        imageSource="/img/lucas-gao-2YC3eJ0ysHY-unsplash.jpg"
        contentPosition="left"
        caption="Inspiration and References"
        header="About This Website"
        buttonLink="/articles/about"
        buttonText="Learn more"
      />
      <FeaturesModal isOpen={features} onClose={() => openFeatures(false)} />
      <GeothermalModal
        isOpen={geothermal}
        onClose={() => openGeothermal(false)}
      />
      <WolvesModal isOpen={wolves} onClose={() => openWolves(false)} />
      <BearsModal isOpen={bears} onClose={() => openBears(false)} />
    </Flex>
  );
}
