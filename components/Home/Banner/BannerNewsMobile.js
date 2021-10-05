import { Flex, Heading, Link } from "@chakra-ui/react";
import BannerCard from "./BannerCard";

const BannerNewsMobile = () => {
  return (
    <Flex
      direction="column"
      align="center"
      display={["flex", "none"]}
      w="100%"
      p="2"
    >
      <Flex w="100%" justify="space-between" p="2">
        <Heading textTransform="uppercase" fontSize="md" mr="4">
          Latest News &amp; Activities
        </Heading>
        <Link fontSize="md" color="blue.200">
          View all news
        </Link>
      </Flex>
      <BannerCard imageSrc="/img/camping.webp" mb="6" />
      <BannerCard imageSrc="/img/hiking.jpg" mb="6" />
      <BannerCard imageSrc="/img/horseback.png" mb="6" />
      <BannerCard imageSrc="/img/rafting.jpg" mb="6" />
    </Flex>
  );
};

export default BannerNewsMobile;
