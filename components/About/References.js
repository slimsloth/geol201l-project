import { Heading, Flex, Link } from "@chakra-ui/react";

const References = () => {
  return (
    <Flex direction="column" mb="12">
      <Heading>References</Heading>
      <Link
        href="https://www.nps.gov/yell/learn/index.htm"
        isExternal
        color="blue.200"
      >
        National Park Site - Yellowstone
      </Link>
      <Link
        href="https://www.usgs.gov/volcanoes/yellowstone"
        isExternal
        color="blue.200"
      >
        United States Geographic Survey
      </Link>
      <Link
        href="https://www.nationalgeographic.org/encyclopedia/yellowstone/"
        isExternal
        color="blue.200"
      >
        National Geographic - Yellowstone
      </Link>
    </Flex>
  );
};

export default References;
