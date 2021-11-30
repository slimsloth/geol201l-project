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
            <Text>Oct 9 | 3 min read</Text>
          </Flex>
        </Flex>
        <Image
          src="/img/andrew-sterling-5nigV-Wh7xY-unsplash.jpg"
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
          Yellowstone was established as the world&apos;s first national park,
          but native Americans have been living there prior for thousands of
          years. Many of this can be found through archaelogical sites and even
          photographs showing that there were natives living in Yellowstone
          before it became a national park. The most well-known tribe was the
          Tukudika (Sheep Eaters). The Tukudika was known for hunting migrating
          bighorn sheep, and harvesting their carcasses for food and materials
          for tools or clothes. They also made use of the area&apos;s hot
          springs both ceremonially and medicinally.
        </Text>
        <Box mb="8">
          <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={3}
            spaceBetween={75}
            navigation
          >
            <SwiperSlide>
              <Box>
                <Image
                  src="/img/history/natives1_william_henry_jackson.jpg"
                  objectFit="cover"
                  w="lg"
                  h="sm"
                  alt="lorem ipsum"
                  alignSelf="center"
                />
                <Text textAlign="center" fontSize="sm" color="gray.300">
                  Photo credit: William Henry Jackson, 1871
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/spear_tip_andrew_geiger.webp"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Photo credit: Andrew Geiger
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/02726.jpg"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Washakie and his warriors; Photographer unknown; 1871; History -
                Indians
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/02729.jpg"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Bannock girls in dress decorated with elk teeth; Photographer
                unknown; No date; History - Indians
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/02730.jpg"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Bannock wickiup; Photographer unknown; 1871; History - Indians
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/02732.jpg"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Bannock men at dance; Photographer unknown; No date; History -
                Indians
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/02733.jpg"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Bannock indians with two white women; Photographer unknown; No
                date; History - Indians
              </Text>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Text mb="8">
          Europeans did not set foot in Yellowstone until the early 1800s,
          primarily for fur trapping and trade. Yellowstone did not fully
          capture the attention of European Americans until some expiditions in
          the mid to late 1800s. The first notable exidition was the 1870
          Washburn-Langfford-Doane Expedition. This expedition was sponsored by
          the Northern Pacific Railway, because they wanted the area mapped out
          for their railway. The expidition team consisted of Surveyor-General
          Henry D. Washburn, Montana politician and businessman Nathaniel P.
          Langford, and attorney Cornelius Hedges. Notably, this was not a
          scientific expidition as you can tell by the team&apos;s backgrounds.
          The expedition successfully mapped out the Yellowstone Lake, however
          their biggest impact was that they named the Old Faithful Geiser which
          remains a popular tourist attraction to this day.
        </Text>

        <Image
          src="/img/history/LangfordYellowstoneLakeMap.jpg"
          objectFit="cover"
          w="lg"
          alt="lorem ipsum"
          alignSelf="center"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300" mb="8">
          Map of Yellowstone Lake by Langford Expedition
        </Text>

        <Text mb="8">
          The 1871 Hayden Expedition was a much more science focused expedition.
          The team included a meteorologist, two botanists, a zoologist,
          mineralogist and many more scientists. The team questioned the
          area&apos;s thermal activity and very unique environment, while also
          improving the parks map. The expedition&apos;s findings excited the
          scientific community and aroused further national interest in
          Yellowstone and its thermal mysteries. Thomas Moran was a photographer
          and sketch artist on the team. Many of his paintings gave the world
          and idea of what Yellowstone actually looked like and what the
          envrionment&apos;s beauty truly entailed.
        </Text>
        <Box mb="8">
          <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={3}
            spaceBetween={75}
            navigation
          >
            <SwiperSlide>
              <Box>
                <Image
                  src="/img/history/Yellowstone-Expedition-horsemen-3000-3x2gty-56ad74475f9b58b7d00b2153.jpg"
                  objectFit="cover"
                  w="lg"
                  h="sm"
                  alt="lorem ipsum"
                  alignSelf="center"
                />
                <Text textAlign="center" fontSize="sm" color="gray.300">
                  1871 Hayden Expedition
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/Moran_3.jpg"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Thomas Moran; No date
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/02936.jpg"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Painting of Old Faithful depicting Hayden Survey 1871 WH Jackson
                No date
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/02937.jpg"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Hayden Expedition, original painting in Yellowstone National
                Park collection; William H Jackson; 1871
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/03061.jpg"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Liberty Cap - Clematis Gulch; YELL 8524; Thomas Moran; 1871
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/history/03062.jpg"
                objectFit="cover"
                w="lg"
                h="sm"
                alt="lorem ipsum"
                alignSelf="center"
              />
              <Text textAlign="center" fontSize="sm" color="gray.300">
                Hot Springs Yellowstone; YELL 8527; Thomas Moran; 1871
              </Text>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Text mb="8">
          The 1871 Hayden Expedition made the United States Congress realize
          what a special place Yellowstone was, making them officially establish
          it as a national park. On March 1st, 1872, President Ulysses S. Grant
          signed an act formally establishing it as the first national park in
          the entire world. Being a national park means that it is a federally
          reserved slice of land that aims to preserve the envrionment and its
          wildlife.
        </Text>
        <Image
          src="/img/history/act.jpg"
          alt="lorem ipsum"
          alignSelf="center"
          mb="8"
        />
      </Flex>
      <Flex w="100%" justify="space-between" mb="8">
        <Flex alignSelf="flex-start ">
          <Link href="/" color="blue.200">
            Back to Home
          </Link>
        </Flex>
        <Flex alignSelf="flex-end">
          <Link href="./old_faithful" color="blue.200">
            Next Article: Old Faithful
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoremIpsum;
