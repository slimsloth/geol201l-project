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

  const BearsModal = ({ isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent bgColor="#0a0b0f" fontSize="xl" color="white">
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
                    alt="hi"
                    src="./img/black_bears/camerauthor-photos-Q041QL3f0A8-unsplash.jpg"
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
                    Photo credit: Unsplash - Cameraauthor Photos
                  </Text>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="hi"
                  src="./img/black_bears/danika-perkinson-x1P45iTcnys-unsplash.jpg"
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
                  Photo credit: Unsplash - Danika Perkinson
                </Text>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="hi"
                  src="./img/black_bears/jack-charles-swcWpfjks1E-unsplash.jpg"
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
                  Photo credit: Unsplash - Jack Charles
                </Text>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="hi"
                  src="./img/black_bears/stephanie-leblanc-55PvjmSfYAQ-unsplash.jpg"
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
                  Photo credit: Unsplash - Stephanie Leblanc
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
            <Button bgColor="#0074e0" colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  export default BearsModal;
