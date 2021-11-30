import { Flex, Image, Heading, Text, Box, Link } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const LoremIpsum = () => {
  return (
    <Flex minH="100vh" direction="column" maxW="100%" px="72" fontSize="xl">
      <Flex direction="column" color="white" p="4">
        <Heading mt="14">The Yellowstone Super Volcano</Heading>
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
            <Text>Oct 15 | 5 min read</Text>
          </Flex>
        </Flex>
        <Image
          src="/img/dan-meyers-BkScvzMN9Nw-unsplash.jpg"
          alt="banner"
          borderRadius="sm"
          mb="2"
          h="500px"
          objectFit="cover"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300" mb="8">
          Photo credit: Unsplash - Andrew Sterling
        </Text>
        <Text mb="8">

        </Text>

        <Box mb="8">
          <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={1}
            spaceBetween={75}
            navigation
          >
            <SwiperSlide>
              <Box>
                <Image
                  src="/img/old_faithful/emily-campbell-b-FJWGFqAeE-unsplash.jpg"
                  w="100%"
                  h="lg"
                  objectFit="scale-down"
                  alt="lorem ipsum"
                  alignSelf="center"
                />
                <Text textAlign="center" fontSize="sm" color="gray.300">
                  Photo credit: Unsplash - Emily Campbell
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Image
                  src="/img/old_faithful/jeffrey-hamilton-sy2tKYRONgw-unsplash.jpg"
                  objectFit="scale-down"
                  w="100%"
                  h="lg"
                  alt="lorem ipsum"
                  alignSelf="center"
                />
                <Text textAlign="center" fontSize="sm" color="gray.300">
                  Photo credit: Unsplash - Jeffrey Hamilton
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Image
                  src="/img/old_faithful/will-myers-YWWi6VlFl0g-unsplash.jpg"
                  objectFit="scale-down"
                  w="100%"
                  h="lg"
                  alt="lorem ipsum"
                  alignSelf="center"
                />
                <Text textAlign="center" fontSize="sm" color="gray.300">
                  Photo credit: Unsplash - Will Myers
                </Text>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Text mb="8">
          
        </Text>
        <Image
          src="/img/old_faithful/old_faithfulplumbing.png"
          objectFit="cover"
          w="lg"
          alt="lorem ipsum"
          alignSelf="center"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300" mb="8">
          The plumbing under Old Faithful
        </Text>

        <Text mb="8"></Text>
      </Flex>
      <Flex w="100%" justify="space-between" mb="8">
        <Flex alignSelf="flex-start ">
          <Link href="./old_faithful" color="blue.200">
            Previous Article: Old Faithful
          </Link>
        </Flex>
        <Flex alignSelf="flex-end">
          <Link href="./bison" color="blue.200">
            Next Article: Bison
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoremIpsum;
