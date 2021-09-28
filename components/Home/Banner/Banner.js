import {
  Flex,
  Image,
  Heading,
  Text,
  Link,
  Spacer,
  Box,
} from "@chakra-ui/react";

const Banner = () => {
  return (
    <Flex direction="column" maxW="100vw">
      <Image
        src="banner.jpg"
        alt="yellowstone banner"
        objectFit="cover"
        width="100vw"
        height="80vh"
      />
      <Flex
        direction="column"
        position="absolute"
        w="100%"
        h="80vh"
        bgGradient="linear(to-t, #060606, transparent)"
        p="16"
      >
        <Spacer />
        <Flex direction="column" w="40%">
          <Heading
            textTransform="uppercase"
            fontSize="4.3rem"
            lineHeight="1.5"
            fontWeight="700"
            mb="4"
          >
            Yellowstone
          </Heading>
          <Text
            lineHeight="1.5"
            fontWeight="400"
            fontSize="1.728rem"
            textShadow="0 1px transparent"
            mb="4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            accumsan augue. Phasellus suscipit turpis et tortor pellentesque
            imperdiet. Aenean sem tellus, semper sed lectus condimentum,
            sagittis fringilla enim.
          </Text>
          <Link
            textDecoration="underline"
            fontSize="1.728rem"
            lineHeight="1.5"
            fontWeight="400"
          >
            Explore Yellowstone
          </Link>
        </Flex>
        <Spacer />
        <Flex direction="column">
          <Flex align="center">
            <Heading textTransform="uppercase" fontSize="1.44rem" mr="4">
              Latest News & Activities
            </Heading>
            <Link fontSize="1.2rem">View all news</Link>
          </Flex>
          <Flex justify="space-between" pt="4">
            <Box
              backgroundColor="#0b0d12"
              border="1px solid #26282c"
              w="23%"
              h="230px"
            >
              im a box
            </Box>
            <Box
              backgroundColor="#0b0d12"
              border="1px solid #26282c"
              w="23%"
              h="230px"
            >
              im a box
            </Box>
            <Box
              backgroundColor="#0b0d12"
              border="1px solid #26282c"
              w="23%"
              h="230px"
            >
              im a box
            </Box>
            <Box
              backgroundColor="#0b0d12"
              border="1px solid #26282c"
              w="23%"
              h="230px"
            >
              im a box
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
