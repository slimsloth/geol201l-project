import { Flex, Heading, Text, Link, Spacer, Button } from "@chakra-ui/react";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <Flex
      direction="column"
      display={["none", "flex"]}
      w="100%"
      h={["20vh", "85vh"]}
      p="8"
      bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(banner.jpg)`}
      bgPosition="center"
      backgroundSize="cover"
      bgRepeat="no-repeat"
    >
      <Spacer />
      <Flex direction="column" w="50%">
        <Heading
          as="h1"
          textTransform="uppercase"
          fontSize={["sm", "6xl"]}
          lineHeight="1.5"
          fontWeight="700"
          mb="4"
        >
          Yellowstone
        </Heading>
        <Text
          lineHeight="1.5"
          fontWeight="400"
          fontSize="c"
          textShadow="0 1px transparent"
          mb="4"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
          accumsan augue.
        </Text>
        <Link
          textDecoration="underline"
          fontSize="xl"
          lineHeight="1.5"
          fontWeight="400"
        >
          <Button variant="outline" >Explore Yellowstone</Button>
        </Link>
      </Flex>
      <Spacer />
      <Flex direction="column">
        <Flex align="center">
          <Heading textTransform="uppercase" fontSize="xl" mr="4">
            Latest News &amp; Activities
          </Heading>
          <Link fontSize="xl">View all news</Link>
        </Flex>
        <Flex justify="space-between" pt="4">
          <BannerCard imageSrc="/img/camping.webp" />
          <BannerCard imageSrc="/img/hiking.jpg" />
          <BannerCard imageSrc="/img/horseback.png" />
          <BannerCard imageSrc="/img/rafting.jpg" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
