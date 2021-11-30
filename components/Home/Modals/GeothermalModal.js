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

const GeothermalModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="#0a0b0f" fontSize={["md", "xl"]} color="white">
        <ModalHeader>Geothermal Life</ModalHeader>
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
                  alt="spring"
                  src="./img/geothermal_life/c-z-shi-3p8GeRGReUQ-unsplash.jpg"
                  objectFit="scale-down"
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
                  Photo credit: Unsplash - C Z Shi
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="spring"
                src="./img/geothermal_life/dan-meyers-jreYbcVNp4s-unsplash.jpg"
                objectFit="scale-down"
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
                alt="more springs"
                src="./img/geothermal_life/trevor-vannoy-l3p_3fynKo4-unsplash.jpg"
                objectFit="scale-down"
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
                alt="dried up spring"
                src="./img/geothermal_life/vicky-t-utEdsRqdqrw-unsplash.jpg"
                objectFit="scale-down"
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
            Yellowstone is home to many different microscorpic organisms called
            thermophiles. Thermophiles love to live in heat and thrive in hot
            temperatures.
          </Text>
          <Text mb="4">
            Scientists in the 1800s often questioned the color of
            Yellowstone&apos;s superheated environments. Some of these waters
            have a disticnt pink, yellow or red colors in them. These colors are
            often mistaken for deposits of purely mineral matter, when in fact
            the color is usually caused by these thermophiles.
          </Text>
          <Text>
            Thermophiles typically live in temperatures between 41 and 122
            degrees. Humans are considered Mesophiles and live between 20 to 45
            degrees.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            bgColor="#0074e0"
            colorScheme="blue"
            onClick={onClose}
            isFullWidth
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GeothermalModal;
