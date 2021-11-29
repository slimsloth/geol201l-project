import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeaturesModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="#0a0b0f" fontSize="xl" color="white">
        <ModalHeader>Yellowstone Features</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Box>
                <Image
                  alt="hi"
                  src="./img/features/dan-meyers-zaXHqMItpcc-unsplash.jpg"
                  objectFit="cover"
                  w="100%"
                  h="md"
                />
                <Text
                  textAlign="center"
                  fontSize="sm"
                  color="gray.300"
                  mb="8"
                  mt="2"
                >
                  Photo credit: Unsplash - Dan Meyers
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="hi"
                src="./img/features/austin-farrington-gp2QLJKOvVc-unsplash.jpg"
                w="100%"
                h="md"
              />
              <Text
                textAlign="center"
                fontSize="sm"
                color="gray.300"
                mb="8"
                mt="2"
              >
                Photo credit: Unsplash - Austin Farrington
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="hi"
                src="./img/features/brandon-green-z57NgfAK5eM-unsplash.jpg"
                w="100%"
                h="md"
              />
              <Text
                textAlign="center"
                fontSize="sm"
                color="gray.300"
                mb="8"
                mt="2"
              >
                Photo credit: Unsplash - Brandon Green
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="hi"
                src="./img/features/joshua-earle-73TihzG37rk-unsplash.jpg"
                w="100%"
                h="md"
              />
              <Text
                textAlign="center"
                fontSize="sm"
                color="gray.300"
                mb="8"
                mt="2"
              >
                Photo credit: Unsplash - Joshua Earle
              </Text>
            </SwiperSlide>
          </Swiper>
          <Text mb="4">
            Yellowstone Park is America&apos;s first national park, primarily
            located in Wyoming. Being a nation park means that the federal
            government has reserved this land to be protected. National parks
            aim to preserve the lands environment and natural wildlife.
          </Text>
          <Text mb="4">
            The park spans an area of 3,468 square miles which is more than 3
            times the size of Orange County, and roughly the same size as
            Yosemite. Yellowstone&apos;s signature feature is its hot springs
            and geysers.
          </Text>
          <Text>
            There is a greater concencration of hot springs in geysers within
            the park than the entire world. Additionally, the park sports more
            than 300 waterfalls and 200 miles of rivers making it an extremely
            unique environment.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button bgColor="#0074e0" colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FeaturesModal;
