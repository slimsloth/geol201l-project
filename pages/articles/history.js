import { Flex, Image, Heading, Text, Box } from "@chakra-ui/react";

const LoremIpsum = () => {
  return (
    <Flex minH="100vh" direction="column" maxW="100%" px="72" fontSize="xl">
      <Flex direction="column" color="white" p="4">
        <Heading mt="14">History of Yellowstone Park</Heading>
        <Flex py="8" align="center">
          <Image
            src="/img/me.jpeg"
            alt="Sean M"
            borderRadius="full"
            boxSize="75px"
            mr="4"
          />

          <Flex direction="column">
            <Text>Sean Mitchell</Text>
            <Text>Oct 9 | 6 min read</Text>
          </Flex>
        </Flex>
        <Image src="/img/spring.jpg" alt="banner" borderRadius="sm" mb="2" />
        <Text textAlign="center" fontSize="sm" color="gray.300">
          Photo credit: your mom
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          turpis non est egestas porta quis viverra velit. Integer at augue et
          nunc placerat luctus et eget tellus. Vivamus faucibus congue turpis,
          nec placerat libero vehicula id. Aenean vel mollis lectus, at
          venenatis lorem. Donec et diam a dui dapibus efficitur. Donec mattis,
          lectus nec tincidunt venenatis, erat mi accumsan nisl, luctus
          porttitor lectus nisl at augue. Quisque aliquam pharetra lorem quis
          gravida. Aenean ullamcorper est id pulvinar euismod.
        </Text>
        <Box h="20px" />
        <Image
          src="https://picsum.photos/200"
          objectFit="cover"
          w="lg"
          h="sm"
          alt="lorem ipsum"
          alignSelf="center"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300">
          Photo credit: your mom
        </Text>
        <Text>
          Nullam non nibh ante. Mauris a iaculis nibh, sit amet aliquam mauris.
          Etiam feugiat dolor sed ipsum sodales, et porttitor enim maximus.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Phasellus nec efficitur est. Ut id erat at
          arcu posuere convallis. Sed dignissim aliquam tellus quis dictum.
          Vivamus nulla elit, bibendum at semper ac, tincidunt eu tellus. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </Text>
        <Box h="20px" />
        <Image
          src="https://picsum.photos/200"
          objectFit="cover"
          w="lg"
          h="sm"
          alt="lorem ipsum"
          alignSelf="center"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300">
          Photo credit: your mom
        </Text>
        <Text>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean
          pellentesque euismod congue. Integer rutrum eros vel porta pulvinar.
          Donec nec venenatis ex. Nunc metus quam, maximus a suscipit sit amet,
          porttitor a dui. Aliquam elementum orci eget turpis consequat, ut
          molestie urna egestas. Mauris tincidunt finibus iaculis.
        </Text>
      </Flex>
    </Flex>
  );
};

export default LoremIpsum;
