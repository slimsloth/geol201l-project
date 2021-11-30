import { Flex, Image, Heading, Text, Box, Link } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const LoremIpsum = () => {
  return (
    <Flex
      minH="100vh"
      direction="column"
      maxW="100%"
      px={["5", "10", "10", "72"]}
      fontSize="xl"
    >
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
          What makes Yellowstone a truly unique landscape is it&apos;s
          geothermic activity. Figuratively, the entire park is essentially
          powered by heat. This is because there is a massive magma chamber
          beneath the park, spanning more than 30 miles long, 25 miles wide and
          10 miles in depth. As we saw in a previous article, Old Faithful is
          evidence for this. Frequently earthquakes and the very ground of
          Yellowstone rising up over the years is also evidence for this.
          Basically, Yellowstone is a giant volcano, or what some people call a
          caldera or super volcano.
        </Text>
        <Image
          src="/img/caldera/1200px-Yellowstone_Caldera.svg.png"
          objectFit="scale-down"
          w="4xl"
          alt="Magma Chamber below yellowstone"
          alignSelf="center"
          borderRadius="10px"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300" mb="8">
          The massive magma chamber beneath the park, provided by USGS.
        </Text>
        <Text mb="8">
          A super eruption is any eruption that measures 8 magnitude or higher
          on the volcanic explosivity index. This is enough power to expel 240
          cubic miles of material, burying the entire state of Texas 5 feet
          deep. To put it simply: a super eruption is a massive eruption
          generally caused by a massive volcano. The last super eruption was
          around 600,000 years ago, known as the Yellowstone Lava Creek
          explosion. This eruption formed many of the hills surrounding the park
          through lava flows, leaving behind a 34 mile by 50 mile depression in
          the ground.
        </Text>
        <Image
          src="/img/caldera/img24.0.jpg"
          objectFit="scale-down"
          w="4xl"
          alt="Super Volcano Diagram"
          borderRadius="10px"
          alignSelf="center"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300" mb="8">
          Difference between a regular eruption and a super eruption.
        </Text>
        <Text mb="8">
          So what would happen if Yellowstone erupted today? Well it would be
          pure chaos with an catastrophic amount of damage to the entirety of
          the country. Ash would spew across the entire country at speeds over
          over 100 miles per hours, with extremely hot temperatures measured
          over 1500&deg; fahrenheit. If within the blast range of this
          explosion, you would be completely decimated, as if an atomic bomb
          went off. The figure below provided by the US Geologic Survey shows
          that the entire country would be covered in ash, which would kill
          humans, animals, and plants. The entire landscape would be devastated.
        </Text>
        <Image
          src="/img/caldera/yellowstone-ash-1.0.jpg"
          objectFit="scale-down"
          w="4xl"
          alt="Predicted ash spread of yellowstone eruption in the US"
          alignSelf="center"
          borderRadius="10px"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300" mb="8">
          How much ash would affect the US if Yellowstone were to erupt today.
        </Text>
        <Text mb="8">
          As I mentioned previously, the last super eruption was over 600,000
          years ago. You can actually still see some of the damage caused by
          this eruption today. In Shoshone, California there is a settlement of
          homes built into ash heaps during the Great Depression. These ash
          heaps were created by the last super eruption, nearly 1,000 miles away
          from the origin point. The animal life in the area was also killed off
          by the ash, you can still find some of their fossils to this day. Some
          say that we are due for another super eruption, but no one knows when
          the next eruption will happen. It likely won&apos;t happen within our
          lifetime, but if it does there are warning signs for when an eruption
          is about to occur such as increased frequency of earthquakes.
        </Text>
        <Image
          src="/img/caldera/20211002_164837.jpg"
          objectFit="scale-down"
          w="4xl"
          alt="Shoshone ash heaps"
          alignSelf="center"
          borderRadius="10px"
        />
        <Text textAlign="center" fontSize="sm" color="gray.300" mb="8">
          Picture of Shoshone ash heaps from our GEOL 201 field trip. Taken by
          me.
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
