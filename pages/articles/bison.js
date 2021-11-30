import { Flex, Image, Heading, Text, Link } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const LoremIpsum = () => {
  return (
    <Flex minH="100vh" direction="column" maxW="100%" px="72" fontSize="xl">
      <Flex direction="column" color="white" p="4">
        <Heading mt="14">Bison</Heading>
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
            <Text>Oct 18 | 3 min read</Text>
          </Flex>
        </Flex>
        <Image
          src="/img/yannick-menard-ISs7qT9fEn8-unsplash.jpg"
          alt="banner"
          borderRadius="5px"
          mb="2"
          h="500px"
          objectFit="cover"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300" mb="8">
          Photo credit: Unsplash - Yannick Menard
        </Text>
        <Text mb="8">
          The bison of Yellowstone are the last truly wild bison in America.
          Bison nearly went exctinct due to hunting, but the park&apos;s
          preservation saved them. They are the largest mammals in North
          America, with males weighing around a whopping 2,000 lbs. Within the
          park, wolves and bears are the only natural predators of adult bison.
          Bison primarily feed on grasses and sedges. Although they are
          herbivores, they can be highly aggressive and dangerous due to their
          massive size. So watch out for bison and keep your distance from them.
        </Text>
        <Image
          src="/img/bison/nick-dunlap--f2-10Ih7NQ-unsplash.jpg"
          objectFit="scale-down"
          w="4xl"
          alt="Bison in the fields"
          borderRadius="20px"
          alignSelf="center"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300" mb="8">
          Photo Credit: Unsplash - Nick Dunlap
        </Text>
        <Text mb="8">
          One of the bison&apos;s greatest killers is the harsh winter of
          Yellowstone. Temperatures go well below freezing, often times
          recording below -66&deg; fahrenheit. One out of ten bison die every
          winter, succumbign to the cold. The heavy snows makes it difficult for
          the bison to find grasses and sedges to feed upon, cutting down their
          supply of food. Yellowstone&apos;s most unique feature plays a
          critical role in helping the bison survive the winter: the hot
          springs. During the winter, bison typically migrate from the
          grasslands to the hot springs to keep warm. So if you are visiting the
          park in the spring, go check out the bison in the grasslands. If you
          are at the park in the winter, go check them out by the hot springs.
        </Text>
        <Image
          src="/img/bison/daniel-lloyd-blunk-fernandez-5dOuxHN3tn0-unsplash.jpg"
          objectFit="scale-down"
          w="4xl"
          borderRadius="20px"
          alt="Bison in the snow"
          alignSelf="center"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300" mb="8">
          Photo Credit: Unsplash - Daniel Lloyd Blunk Fernandez
        </Text>
      </Flex>
      <Flex w="100%" justify="space-between" mb="8">
        <Flex alignSelf="flex-start ">
          <Link href="./caldera" color="blue.200">
            Previous Article: Yellowstone Caldera
          </Link>
        </Flex>
        <Flex alignSelf="flex-end">
          <Link href="./about" color="blue.200">
            Next Article: About this Website
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoremIpsum;
